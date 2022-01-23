import  React,  { Component }   from    'react'
import  "./Contador.css";

import PassoForm    from "./PassoForm";
import Botoes from './Botoes';
import Display from './Display';


class   Contador    extends Component{
    state   =   {
        numero: this.props.numeroInicial || 0,
        passo:  this.props.passoInicial    || 2,
        };

    inc =   () => {
        this.setState({
            numero: this.state.numero   +   this.state.passo,
        });
    };

    dec =   () => {
        this.setState({
            numero: this.state.numero   -   this.state.passo,
        });
    };

    setPasso    =   (novoPasso) =>{
        this.setState({
            passo:  novoPasso,
        });
    };

    render()    {
        return  (
            <div    className="Contador">
                <h2>Contador</h2>
                
                <Display    numero={this.state.numero}    />
                <PassoForm  passo={this.state.passo}  setPasso={this.setPasso}/>
                <Botoes setInc={this.inc} setDec={this.dec}/>

            </div>
        );
    }
}

export  default Contador