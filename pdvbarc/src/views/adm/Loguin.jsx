import  React  from    'react'
import "./Loguin.css";


const   Loguin    =   props   =>   (
        <div    className="Loguin">
            <div    className="InfoInicial">
                <h4>Bem vindo!</h4>
                <h4>Controle de Validade</h4>

            </div>
        
            <div    className="InfoUser">
                <h2>loguin</h2>

                <div className="input">
                    <h1>Usuario</h1>
                    <input type="text" className="usuario"/>
                    <h1>Senha</h1>
                    <input type="text" className="senha"/>

                </div>

                <div>
                    <button className="btn">Entrar</button>
                    <button className="btn">Esqueci Senha</button>

                </div>
            </div>
        
        </div>
)
 
export  default Loguin