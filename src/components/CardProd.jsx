function CardProduto({ produto, adicionar }) {
  return (
    <div className="card">
      <h3>{produto.nome}</h3>

      <p>R$ {produto.preco.toFixed(2)}</p>

      <button onClick={() => adicionar(produto)}>
        Adicionar
      </button>
    </div>
  );
}

export default CardProduto;