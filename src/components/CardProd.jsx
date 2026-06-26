import './CardProd.css'

function CardProd(props){
    return(
        <div className="cardProd">
        <div className="cardProd-container">
            <h2>{props.nome}</h2>
            <h3>R$ {props.preco}</h3>
        </div>
        </div>
    )
}

export default CardProd 