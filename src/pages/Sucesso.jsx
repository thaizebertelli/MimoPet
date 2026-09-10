import { Link } from 'react-router-dom';
import { Header } from '../components/Header';

export function Sucesso() {
  return (
    <>
      <Header etapaAtual="concluido" />
      <main className="container-resultado">
        <div className="icone-resultado sucesso">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>

        <h1 className="titulo-resultado">Compra Aprovada!</h1>
        <p className="texto-resultado">
          Obrigado por escolher a MimoPet!<br />
          Seu pet já está esperando pelos mimos
        </p>

        <Link to="/" className="btn-continuar">
          Voltar para o carrinho
        </Link>
      </main>
    </>
  );
}