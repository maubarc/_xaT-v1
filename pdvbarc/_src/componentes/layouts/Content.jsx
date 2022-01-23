import  './Content.css'
import  React   from    'react'
import { Routes, Route} from    'react-router-dom'

import  Home    from    '../../views/pages/examples/Home'
import  Param   from    '../../views/pages/examples/Param'
import  About    from    '../../views/pages/examples/About'
import  Pag404    from    '../../views/pages/examples/Pag404'
import  Calculadora    from    '../../views/pages/cal/Calculadora'
import UseState from '../../views/pages/examples/UseState'
import UseEffect from '../../views/pages/examples/UseEffect'
import UseRef from '../../views/pages/examples/UseRef'
import UseMemo from '../../views/pages/examples/UseMemo'
import UseCallback from '../../views/pages/examples/UseCallback'
import CadUser from '../../views/pages/examples/CadUser'
import Loguin from '../../views/pages/examples/Loguin'
import Venda from '../../views/pages/pdv/Venda'
import Inativo from '../../views/pages/pdv/Inativo'



import Monitor from '../../views/pages/examples/Monitor'
import Servidor from '../../views/pages/Monitor/Servidor'
import Path_comum from '../../views/pages/Monitor/Path_comum'


const   Content    =   props   =>   (
    <main  className="Content">
        <Routes>
                <Route path="/param/:id" 
                        caseSensitive={false} 
                        element={<Param />} />                  

                <Route path="/about" 
                        caseSensitive={false} 
                        element={<About />} />

                <Route path="/calculadora" 
                        caseSensitive={false} 
                        element={<Calculadora />} />   

                <Route exact path="/" 
                        caseSensitive={false} 
                        element={<Home />} />   

                <Route path="*" 
                        caseSensitive={false} 
                        element={<Pag404 />} />      
                           
                <Route path="usestate" 
                        caseSensitive={false} 
                        element={<UseState  />} />

                <Route path="useeffect" 
                        caseSensitive={false} 
                        element={<UseEffect  />} />     

                <Route path="useref" 
                    caseSensitive={false} 
                    element={<UseRef  />} />     

                <Route path="usememo" 
                    caseSensitive={false} 
                    element={<UseMemo  />} />     
  
                <Route path="usecallback" 
                    caseSensitive={false} 
                    element={<UseCallback  />} />     

                <Route path="monitor" 
                    caseSensitive={false} 
                    element={<Monitor  />} />     

                <Route path="servidor" 
                    caseSensitive={false} 
                    element={<Servidor  />} />     
                
                <Route path="path_comum" 
                    caseSensitive={false} 
                    element={<Path_comum  />} />

                <Route path="caduser" 
                    caseSensitive={false} 
                    element={<CadUser  />} />   

                <Route path="loguin" 
                    caseSensitive={false} 
                    element={<Loguin  />} />   

                <Route path="venda" 
                    caseSensitive={false} 
                    element={<Venda  />} /> 
               
                <Route path="inativo" 
                    caseSensitive={false} 
                    element={<Inativo  />} /> 
        </Routes>
    </main>                
)

export  default Content