import  React,  {useEffect, useState, useFatorial}   from    'react'
import  PageTitle   from    '../../../componentes/layouts/PageTitle'
import  SectionTitle   from    '../../../componentes/layouts/SectionTitle'

function    calcFatorial(num) {
    const   n   =   parseInt(num)
    if(n < 0) return  - 1
    if(n === 0)   return  1
    return  calcFatorial(n - 1)   *   n
}


const   UseEffect    =   (props) =>  {
    const   [number,  setNumber]    =   useState(1)
    const   [fatorial,  setFatorial]    =   useState(1)

    useEffect(function()    {
        setFatorial(calcFatorial(number))
    },  [number])   
    
    const   [status, setStatus] = useState("Impar")
    useEffect(function()    {
        setStatus(number % 2 === 0 ? 'PAR' : 'IMPAR')
    },  [number])  



    return  (
        <div    className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais" />

            <SectionTitle   title="Exercicios #001" /> 
            <div className="center" >    
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? 'não existe'  :   fatorial}</span>
                </div>
                <input  type="number" className="input"
                  value={number}    
                  onChange={e =>  setNumber(e.target.value)}    />   
            </div>       

            <SectionTitle   title="Exercicios #002" /> 
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{status}</span>
                </div>
                  

            </div>
        </div>
    )
}

export  default UseEffect