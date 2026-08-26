import { useState } from "react";
import CardProd from "./components/CardProd";
import Pedido from "./components/Pedido";

function App() {
  const produtos = [
    { id: 1, nome: "X-Burger", preco: 18 },
    { id: 2, nome: "X-Salada", preco: 20 },
    { id: 3, nome: "X-Bacon", preco: 22 },
    { id: 4, nome: "Batata Frita", preco: 12 }
  ];

  const [pedido, setPedido] = useState([]);

  function adicionar(produto) {
    setPedido([...pedido, produto]);
  }

  const total = pedido.reduce((soma, produto) => {
    return soma + produto.preco;
  }, 0);

  return (
    <div>
      <h1>Cardápio da Lanchonete</h1>

      <h2>Produtos</h2>

      {produtos.map((produto) => (
        <CardProd
          key={produto.id}
          produto={produto}
          adicionar={adicionar}
        />
      ))}

      <Pedido pedido={pedido} total={total} />
    </div>
  );
}

export default App;