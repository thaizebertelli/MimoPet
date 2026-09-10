import sucessoIcon from "../assets/img/certo.svg";

import { Link } from "react-router-dom";
import { Header } from "../components/Header";

export function Sucesso() {
  return (
    <>
      <Header etapaAtual="concluido" />
      <main className="container-resultado">
        <div className="icone-resultado sucesso">
          <img
            src={sucessoIcon}
            alt="Compra Aprovada"
            className="icone-sucesso-img"
          />
        </div>

        <h1 className="titulo-resultado">Compra Aprovada!</h1>
        <p className="texto-resultado">
          Obrigado por escolher a MimoPet!
          <br />
          Seu pet já está esperando pelos mimos
        </p>

        <Link to="/" className="btn-continuar">
          Voltar para o carrinho
        </Link>
      </main>
    </>
  );
}
