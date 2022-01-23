import  React,  {   Component}   from    'react';
import  './Teclado.css'
import  Teclas   from    './Teclas';


const   initialState    =   {
    displayValue:'0',
    clearDisplay:   false,
    
    values:[0, 0],
    current: 0
}

export  default class   Teclado extends Component   {

    state   =   {   ...initialState }


    constructor(props)  {
        super(props)
        this.clearMemory    =   this.clearMemory.bind(this)
        
        this.addDigit    =   this.addDigit.bind(this)

    }


    clearMemory(n) {
        this.setState({ ...initialState})
        
    }  

    addDigit(n) {
        if  (n  === '*' &&  this.state.displayValue.includes('*'))  {
            return
        }

        const   clearDisplay    =   this.state.displayValue === '0'
            ||  this.state.clearDisplay
        const   currentValue    =   clearDisplay    ?   ''  :   this.state.displayValue
        const   displayValue    =   currentValue    +   n
       
        if  (n  !== '*')    {
            const   i   =   this.state.current
            const   newValue    =   parseFloat(displayValue)
            const   values  =   [...this.state.values]
            values[i]    =   newValue
            this.setState({values})
            console.log(values)
        }
    }

    

    render()    {
        return  (
            <div    className="teclado">

                <Display    value={this.state.displayValue}    />
                <Teclas label="AC"  click={this.clearMemory} triple/>
                <Teclas label="/"   click={this.setOperation} operation/>
                <Teclas label="7"   click={this.addDigit} />
                <Teclas label="8"   click={this.addDigit}   />
                <Teclas label="9"   click={this.addDigit}   />
                <Teclas label="*"   click={this.setOperation} operation   />
                <Teclas label="4"   click={this.addDigit}   />
                <Teclas label="5"   click={this.addDigit}   />
                <Teclas label="6"   click={this.addDigit}   />
                <Teclas label="-"   click={this.setOperation} operation   />
                <Teclas label="1"   click={this.addDigit}   />
                <Teclas label="2"   click={this.addDigit}   />
                <Teclas label="3"   click={this.addDigit}   />
                <Teclas label="+"   click={this.setOperation} operation   />
                <Teclas label="0"   click={this.addDigit}  double />
                <Teclas label="."   click={this.addDigit}   />
                <Teclas label="="   click={this.setOperation} operation   />
                


            </div>
        )
    }
}