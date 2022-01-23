import  '../layout/Tabela.css';
import  React   from    "react";
import  funcionarios    from    "../data/Funcionarios";

export  default (props)   =>  {

    function    getLinhas() {
        return  funcionarios.map((funcionario, i)=> {
            return  (
                <div>
                    <tr key={funcionario.id}
                            className={i % 2 === 0 ? 'par' : 'impar'}>
                        <td>{funcionario.loja}</td>
                        <td>{funcionario.nome}</td>
                        <td>{funcionario.setor}</td>
                        
                    </tr>
     

                </div>
            )
        })
    }

    return  (
        <div className="Tabela">
            <table >
                <thead>
                    <tr>
                        <th>Loja</th>  
                        <th>Nome</th>
                        <th>Setor</th>
                    </tr>
                </thead>
                <tbody>    
                    <tr>
                        <th>
                            {getLinhas()}
                        </th>
                        
                    </tr>                 

                </tbody>
            </table>
        </div>
    );
};