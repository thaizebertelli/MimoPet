import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Header } from '../components/Header';
import { ResumoCompra } from '../components/ResumoCompra';
import { produtosIniciais } from '../data/produtos';
import { usePagamento } from '../hooks/usePagamento';

// Esquema de Validação com Zod usando as mensagens exatas do seu mockup
const pagamentoSchema = z.object({
  numero: z
    .string()
    .transform((val) => val.replace(/[\s-]/g, ''))
    .refine((val) => val.length === 16, 'O cartão deve possuir 16 dígitos'),
  cvv: z.string().regex(/^\d{3}$/, 'Deve possuir 3 dígitos'),
  validade: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Informe uma data válida'),
  titular: z.string().min(1, 'Informe o nome do titular'),
});

export function Pagamento() {
  const { processarCompra, processando } = usePagamento();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(pagamentoSchema),
  });

  const onSubmit = (dados) => {
    processarCompra(dados);
  };

  return (
    <>
      <Header etapaAtual="pagamento" />
      <main className="container-carrinho">
        <section className="secao-produtos">
          <header className="titulo-secao-pagamento">
            <h1>Pagamento</h1>
            <p>Preencha os dados abaixo para finalizar seu pedido</p>
          </header>

          <form onSubmit={handleSubmit(onSubmit)} className="form-pagamento">
            <h2 className="subtitulo-form">Informações do cartão</h2>

            <div className="campo-linha">
              <label htmlFor="numero">Número do cartão</label>
              <input
                id="numero"
                type="text"
                placeholder="0000 0000 0000 0000"
                {...register('numero')}
              />
              {errors.numero && <span className="erro-texto">{errors.numero.message}</span>}
            </div>

            <div className="linha-dupla-cartao">
              <div className="campo-linha">
                <label htmlFor="cvv">
                  CVV <span className="icone-info">ⓘ</span>
                </label>
                <input
                  id="cvv"
                  type="text"
                  placeholder="000"
                  {...register('cvv')}
                />
                {errors.cvv && <span className="erro-texto">{errors.cvv.message}</span>}
              </div>

              <div className="campo-linha">
                <label htmlFor="validade">Validade</label>
                <input
                  id="validade"
                  type="text"
                  placeholder="MM/AA"
                  {...register('validade')}
                />
                {errors.validade && <span className="erro-texto">{errors.validade.message}</span>}
              </div>
            </div>

            <div className="campo-linha">
              <label htmlFor="titular">Titular do cartão</label>
              <input
                id="titular"
                type="text"
                placeholder="Nome no cartão"
                {...register('titular')}
              />
              {errors.titular && <span className="erro-texto">{errors.titular.message}</span>}
            </div>

            {/* Exibição condicional do botão / card de carregamento */}
            {processando ? (
              <div className="card-processando">
                <div className="conteudo-processando">
                  <span className="spinner-carregando"></span>
                  <span>Processando compra</span>
                </div>
                <p className="subtexto-processando">Aguarde enquanto finalizamos seu pedido.</p>
              </div>
            ) : (
              <button type="submit" className="btn-continuar">
                Finalizar Compra
              </button>
            )}
          </form>
        </section>

        <section className="secao-resumo">
          <ResumoCompra produtos={produtosIniciais} />
        </section>
      </main>
    </>
  );
}