import { Link } from 'react-router-dom';
import { Header } from '../components/Header';

export function Falha() {
  return (
    <>
      <Header etapaAtual="concluido" />
      <main className="container-resultado">
        <div className="icone-resultado falha">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        </div>

        <h1 className="titulo-resultado">tentativa de golpe</h1>
        <p className="texto-resultado">
          Não foi possível concluir a compra<br />
          Verifique os dados e tente novamente.
        </p>

        <Link to="/pagamento" className="btn-continuar">
          Tentar novamente
        </Link>
      </main>
    </>
  );
}