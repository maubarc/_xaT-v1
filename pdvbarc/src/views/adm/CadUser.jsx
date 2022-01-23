import  React  from    'react'
import "./CadUser.css";


const   CadUser    =   props   =>   (
        <div    className="CadUser">
            <div className="CadInfo">
                <h4>Cadastro de Usuario</h4>
                <h1>Nome Completo</h1>
                <input type="text" className="nome"/>
                <h1>CPF</h1>
                <input type="text" className="cpf"/>
                <h1>Senha</h1>
                <input type="text" className="senha"/>
                <h1>Confirma Senha</h1>
                <input type="text" className="confirmasenha"/>
            </div>

            <div className="acao">
                <button className="btn">Gravar</button>
                <button className="btn">Cancelar</button>
            </div>
        </div>
)
 
export  default CadUser