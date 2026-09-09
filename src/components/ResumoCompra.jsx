import { formatarMoeda } from '../utils/formatador';

export function ResumoCompra({ produtos }) {
  const subtotal = produtos.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );
  const total = subtotal; // Frete Grátis

  return (
    <aside className="resumo-box">
      <h2>Resumo da compra</h2>
      
      <div className="linha-resumo">
        <span>Subtotal</span>
        <span>{formatarMoeda(subtotal)}</span>
      </div>
      
      <div className="linha-resumo">
        <span>Frete</span>
        <span className="frete-gratis">Grátis</span>
      </div>
      
      <div className="linha-resumo total">
        <strong>Total</strong>
        <strong>{formatarMoeda(total)}</strong>
      </div>
    </aside>
  );
}