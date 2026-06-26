import './Login.css'

function Login(){
    return(
        <>
            <div className="LOGIN">
            <div className="login-container">
                <h2>Login</h2>
                <input type="text" placeholder="usuário"/>
                <input type="password" placeholder="senha"/>
                <button>Enviar</button>
                <p>Esqueceu a senha?</p>
            </div>      
            </div>

            <div className="funcionario">

            </div>    
        </>

    )
}
export default Login