import { Routes, Route } from 'react-router-dom';
import { Carrinho } from './pages/Carrinho';

// Paginas temporárias só para o link não quebrar antes de as criarmos
function PagamentoTemp() {
  return <div style={{ padding: '2rem' }}><h1>Página de Pagamento (Em breve)</h1></div>;
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Carrinho />} />
      <Route path="/pagamento" element={<PagamentoTemp />} />
    </Routes>
  );
}

export default App;