import { formatarMoeda } from "../utils/formatador";
import lixeiraIcon from "../assets/img/iconLixo.svg";
import menosIcon from "../assets/img/iconMenos.svg";
import maisIcon from "../assets/img/iconMais.svg";

export function ItemCarrinho({ item }) {
  const subtotal = item.preco * item.quantidade;

  return (
    <div className="card-produto">
      <img src={item.imagem} alt={item.nome} className="imagem-produto" />

      <div className="detalhes-produto">
        <h3 className="nome-produto">{item.nome}</h3>
        <p className="preco-unitario">{formatarMoeda(item.preco)}</p>

        <div className="controles-quantidade">
          <button
            type="button"
            className="btn-qtd"
            aria-label="Diminuir quantidade"
          >
            <img src={menosIcon} alt="Diminuir" className="icone-qtd" />
          </button>

          <span className="numero-quantidade">{item.quantidade}</span>

          <button
            type="button"
            className="btn-qtd"
            aria-label="Aumentar quantidade"
          >
            <img src={maisIcon} alt="Aumentar" className="icone-qtd" />
          </button>
        </div>

        <p className="subtotal-item">Sub total {formatarMoeda(subtotal)}</p>
      </div>

      <button
        type="button"
        className="btn-remover"
        aria-label="Remover produto"
      >
        <img src={lixeiraIcon} alt="Remover" className="icone-lixeira" />
      </button>
    </div>
  );
}
