import  React   from    'react';
import  './Botoes.css'



function    Botoes(){
    return(
        <div className="Botoes">
                    <div>
                        <button className="7" label="7">7</button>
                        <button className="8" label="8">8</button>
                        <button className="9" label="9" >9</button>
                    </div>
        
                    <div >
                        <button className="4" label="4" >4</button>
                        <button className="5" label="5" >5</button>
                        <button className="6" label="6" >6</button>
                    </div>
        
                    <div >
                        <button className="1" label="1" >1</button>
                        <button className="2" label="2" >2</button>
                        <button className="3" label="3" >3</button>
                    </div>        
                
                    <div >
                        <button className="0" label="0" >0</button>
                        <button className="00" label="00" >00</button>
                        <button className="*" label="*" >*</button>
                    </div>
                 
    </div>
    )
}

export  default Botoes


