import  React,{useState, useRef, useEffect}   from    'react'





    const   UseRef = props =>   {

        const   [value1, setValue1]    =   useState("")
        
        
        const   myInput1    =   useRef(null)

        

        return  (

            <div>
                <div>
                     <input  type="text" className="input"
                     ref={myInput1} 
                     value={[value1]}    onChange={(e) =>  [setValue1](e.target.value)}    />


                </div>
               
                <div>
                    <div>
                        <button className="btn"
                            value={value1}
                            onClick={() =>  setValue1(value1 + 7)}>7</button>
                        <button className="btn"
                            value={value1}
                                onClick={() =>  setValue1(value1 + 8)}>8</button>
                        <button className="btn"
                                value={value1}
                                    onClick={() =>  setValue1(value1 + 9)}>9</button>
                    </div>
                    <div>
                        <button className="btn"
                                value={value1}
                                    onClick={() =>  setValue1(value1 + 4)}>4</button> 
                        <button className="btn"
                                value={value1}
                                    onClick={() =>  setValue1(value1 + 5)}>5</button> 
                        <button className="btn"
                                value={value1}
                                    onClick={() =>  setValue1(value1 + 6)}>6</button> 
                    </div>
                    
                    <div>
                        <button className="btn"
                                value={value1}
                                    onClick={() =>  setValue1(value1 + 1)}>1</button> 
                        <button className="btn"
                                value={value1}
                                    onClick={() =>  setValue1(value1 + 2)}>2</button> 
                        <button className="btn"
                                value={value1}
                                    onClick={() =>  setValue1(value1 + 3)}>3</button> 
                    </div>
                    <div>
                        <button className="btn"
                                value={value1}
                                    onClick={() =>  setValue1(value1 + 0)}>0</button> 
                        <button className="btn"
                                value={value1}
                                    onClick={() =>  setValue1(value1 + 0 + 0)}>00</button> 
                        <button className="btn"
                                value={value1}
                                    onClick={() =>  setValue1(value1 + ".")}>.</button> 
                    </div>
                </div>

            </div>

        )
    }   
    

export  default UseRef