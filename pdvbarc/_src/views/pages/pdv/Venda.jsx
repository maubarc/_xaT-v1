import  React   from    'react';
import  './Venda.css'



import  Info1   from    './componentes/info1'
import  Info2   from    './componentes/Info2'
import  Botoes   from    './componentes/venda/Botoes'
import  Botoes2   from    './componentes/venda/Botoes2'
import  UseRef   from    './componentes/venda/Input'


function   Venda(){
    return  (
        <div className="TelaVenda">
            <div>
                <div className="Informacoes">
                    <Info1  />
                    <Info2  />
                    
                    <div className="Botoe">
                        <UseRef />
                       
                        <Botoes2 />
                    </div>

                    
                
                </div>
                
            </div>


            <div    className="part2">
                <div  className="CupomRotativo">
                    
                    
                </div>

                <div className="TecNumerico">
                       
                </div>
                
            </div>
                
                
                
                
            
            
            


        </div>     
    )
}


export default Venda