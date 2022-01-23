import  React,  {useState}   from    'react'
import  PageTitle   from    '../../../componentes/layouts/PageTitle'
import  SectionTitle   from    '../../../componentes/layouts/SectionTitle'

const   UseState    =   (props) =>  {
    const   [count, setCount]   =   useState(0)
    const   [name,  setName]    =   useState("")

    return  (
        <div    className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais" />

            <SectionTitle   title="Exercicios #001" />
            <div    className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn"
                        onClick={() =>  setCount(count  -   1)}>-1</button>
                    <button className="btn"
                        onClick={() =>  setCount(count  +   1)}>+1</button>
                    <button className="btn"
                        onClick={() =>  setCount(currect    =>  currect +   10)}>+10</button>    
                </div>
            </div>

            <SectionTitle   title="Exercicios #002" />    
            <input  type="text" className="input"
                value={name}    onChange={e =>  setName(e.target.value)}    />

        </div>
    )
}

export  default UseState