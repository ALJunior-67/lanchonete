import './Botao.css'

function Botao(props){
    return(
        <div className="Botao">
        <div className="Botao-container">
            <h2>{props.nome}</h2>
            <h3>R$ {props.preco}</h3>
        </div>
        </div>
    )
}

export default Botao 