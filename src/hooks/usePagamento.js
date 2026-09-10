import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { verificarDigitosIguais } from '../utils/pagamento';

export function usePagamento() {
  const [processando, setProcessando] = useState(false);
  const navigate = useNavigate();

  const processarCompra = (dadosCartao) => {
    setProcessando(true);

    // Simula requisição assíncrona de 2,5 segundos
    setTimeout(() => {
      const ehGolpe = verificarDigitosIguais(dadosCartao.numero);
      setProcessando(false);

      if (ehGolpe) {
        navigate('/falha');
      } else {
        navigate('/sucesso');
      }
    }, 2500);
  };

  return { processarCompra, processando };
}