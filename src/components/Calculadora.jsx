import { useState } from "react";
import './Calculadora.css'
function App() {
  const precoXBurguer = 15.9;
  const precoXSalada = 17.9;
  const precoRefri = 6;

  const [qtdXBurguer, setQtdXBurguer] = useState(0);
  const [qtdXSalada, setQtdXSalada] = useState(0);
  const [qtdRefri, setQtdRefri] = useState(0);

  const total =
    qtdXBurguer * precoXBurguer +
    qtdXSalada * precoXSalada +
    qtdRefri * precoRefri;

  return (
    <div className="calculadora">
      <h2>X-Burguer</h2>
      <p>R$ {precoXBurguer}</p>
      <button onClick={() => setQtdXBurguer(qtdXBurguer + 1)}>
        +
      </button>
      <button onClick={() => setQtdXBurguer(qtdXBurguer - 1)}>
        -
      </button>
      <p>Quantidade: {qtdXBurguer}</p>

      <hr />

      <h2>X-Salada</h2>
      <p>R$ {precoXSalada}</p>
      <button onClick={() => setQtdXSalada(qtdXSalada + 1)}>
        +
      </button>
      <button onClick={() => setQtdXSalada(qtdXSalada + 1)}>
        -
      </button>
      <p>Quantidade: {qtdXSalada}</p>

      <hr />

      <h2>Refrigerante</h2>
      <p>R$ {precoRefri}</p>
      <button onClick={() => setQtdRefri(qtdRefri + 1)}>
        Adicionar
      </button>
      <p>Quantidade: {qtdRefri}</p>

      <hr />

      <h1>Total: R$ {total.toFixed(2)}</h1>
    </div>
  );
}

export default App;