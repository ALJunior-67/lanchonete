import { useState } from "react";
import './CardProd.css'

function CardProd(props) {
  const [quantidade, setQuantidade] = useState(0);

  return (
    <div className="cardProd">
      <h1>{props.nome}</h1>

      <h2>R$ {props.preco}</h2>

      <h3>R$ {props.preco * quantidade}</h3>

      <p>Quantidade: {quantidade}</p>

      <button onClick={() => setQuantidade(quantidade + 1)}>
        Adicionar
      </button>

      <button onClick={() => {

        if(quantidade>0){setQuantidade(quantidade - 1)}}}>
        Remover

      </button>

      <button onClick={() => setQuantidade(0)}>
        Zerar
      </button>
      
    </div>
  );
}

export default CardProd;