import { Link } from "react-router-dom";
import logoImg from "../assets/img/logo.svg";
import sacolaIcon from "../assets/img/iconSacola.svg";

export function Header({ etapaAtual }) {
  return (
    <header className="header-principal">
      <div className="container-header">
        <Link to="/" className="logo-container">
          <img src={logoImg} alt="MimoPet" className="logo-imagem" />
        </Link>
        <div className="icone-carrinho-header">
          <img src={sacolaIcon} alt="Carrinho" className="icone-sacola" />
          <span className="badge-quantidade">3</span>
        </div>
      </div>

      <nav className="barra-progresso" aria-label="Progresso da compra">
        <span className={etapaAtual === "carrinho" ? "etapa ativa" : "etapa"}>
          Carrinho
        </span>
        <span className="separador">&gt;</span>
        <span className={etapaAtual === "pagamento" ? "etapa ativa" : "etapa"}>
          Pagamento
        </span>
        <span className="separador">&gt;</span>
        <span className={etapaAtual === "concluido" ? "etapa ativa" : "etapa"}>
          Concluído
        </span>
      </nav>
    </header>
  );
}
