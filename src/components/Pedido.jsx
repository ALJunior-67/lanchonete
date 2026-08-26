function Pedido({ pedido, total }) {
    return (
      <section className="pedido">
        <h2>Meu Pedido</h2>
  
        {pedido.map((produto, index) => (
          <div className="item-pedido" key={index}>
            <span>{produto.nome}</span>
            <span>R$ {produto.preco.toFixed(2)}</span>
          </div>
        ))}
  
        <h3>Total: R$ {total.toFixed(2)}</h3>
      </section>
    );
  }
  
  export default Pedido;