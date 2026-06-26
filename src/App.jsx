import Header from "./components/Header";
import Login from "./components/Login";
import CardProd from "./components/CardProd";
import Funcionario from "./components/Funcionario";
import Contador from "./components/Contador";

function App(){
    return(
        <>
            <Header titulo="Lanchonete Xpress" 
            subtitulo="O melhor da região" />
            <Login />

            <CardProd nome="X-Burguer" preco={15.90} />
            <CardProd nome="X-Salada" preco={17.90} />
            <CardProd nome="Refrigerante" preco={6.00} />

            <Funcionario func="João" cargo="Atendente" />

            <Contador />

        </>
    )
}
export default App