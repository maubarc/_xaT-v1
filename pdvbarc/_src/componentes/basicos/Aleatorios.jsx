import  './Aleatorios.css'
import  React   from    "react";


export  default (props) =>  {
  const { min,  max}  = props;
  const aleatorio = parseInt(Math.random()  * (max  - min)) + min;
  return  (
    <div  className="Quadro">
      <h3 >Valor aleatório</h3>
      <p>
        <div  className="ValorMinimo">
          <strong>Valor Minimo:</strong>{min}
        </div>
        
      </p>
      <p>
        <div  className="ValorMaximo">
          <strong >Valor Maximo:</strong>{max}
        </div>
       
      </p>
      <p>
        <div className="ValorSorteado">
          <strong >Valor Sorteado:</strong> {aleatorio}
        </div>
        
      </p>
    </div>
  );
};



