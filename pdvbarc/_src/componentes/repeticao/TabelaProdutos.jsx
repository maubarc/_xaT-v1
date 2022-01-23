import  './TabelaProdutos.css'
import  React   from    "react";
import  produtos    from    "../data/Produtos";

export  default (props)   =>  {

    function    getLinhas() {
        return  produtos.map((produto, i)=> {
            return  (
                <div>
                    <tr key={produto.id}
                            className={i % 2 === 0 ? 'par' : 'impar'}>
                        <td>{produto.ean}</td>
                        <td>{produto.descricao}</td>
                        <td>R$ {produto.preco.toFixed(2).replace('.',',')}</td>
                    </tr>
     

                </div>
                
            )
            
        })


        
    }


    return  (
        <div className="TabelaProdutos">
            <table >
                <thead>
                    <tr>
                        <th>Codigo</th>    
                        <th>Descrição</th>
                        <th>Preço</th>
                        
                        
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