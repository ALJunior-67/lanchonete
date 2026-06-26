
import './Funcionario.css'

function Funcionario(props){
    return(
        <div className="func">
            <h2>Nome: {props.func}</h2>
            <h3>Cargo: {props.cargo}</h3>
        </div>
    )
}

export default Funcionario