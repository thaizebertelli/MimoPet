import { formatarMoeda } from '../utils/formatador';

export function ItemCarrinho({ item }) {
  const subtotal = item.preco * item.quantidade;

  return (
    <div className="card-produto">
      <img src={item.imagem} alt={item.nome} className="imagem-produto" />
      
      <div className="detalhes-produto">
        <h3 className="nome-produto">{item.nome}</h3>
        <p className="preco-unitario">{formatarMoeda(item.preco)}</p>
        
        <div className="controles-quantidade">
          <button type="button" aria-label="Diminuir quantidade">-</button>
          <span>{item.quantidade}</span>
          <button type="button" aria-label="Aumentar quantidade">+</button>
        </div>
        
        <p className="subtotal-item">
          Sub total {formatarMoeda(subtotal)}
        </p>
      </div>

      <button type="button" className="btn-remover" aria-label="Remover produto">
        🗑️
      </button>
    </div>
  );
}