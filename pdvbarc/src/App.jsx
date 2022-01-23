import  './App.css'
import  React from    'react'
import {    BrowserRouter as Router } from    'react-router-dom'



import  Menu    from    '../src/componentes/layout/Menu'
import  Content    from    '../src/componentes/layout/Content'


const   App    =   props   =>   (
    
    

    <div  className="App">
        
        <Router>
            <Menu   />
            <Content    />
        </Router>
    </div>
)
export  default App



