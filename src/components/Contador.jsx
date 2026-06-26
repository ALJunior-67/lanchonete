import {useState} from "react";

function Contador(){
    const [contador,setContador] = useState(0)

    return (

        <>
            <h1>{contador}</h1>

            <button onClick={() => setContador(contador+1)}>Adicionar</button>
            <button onClick={() => setContador(contador-1)}>Diminuir</button>
            <button onClick={() => setContador(0)}>Zerar</button>
        </>
    )
}

export default Contador