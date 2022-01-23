import  './Content.css'
import  React   from    'react'
import { Routes, Route} from    'react-router-dom'


import Loguin from '../../views/adm/Loguin'
import CadUser from '../../views/adm/CadUser'
import Venda from '../../views/pdv/Venda'
import Inativo from '../../views/pdv/Inativo'
import Servidor from '../../views/monitor/Servidor'
import Path_comum from '../../views/monitor/Path_comum'


const   Content    =   props   =>   (
    <main  className="Content">
        <Routes>
  
                <Route path="/" 
                    caseSensitive={false} 
                    element={<Loguin  />} />  
                
                <Route path="servidor" 
                    caseSensitive={false} 
                    element={<Servidor  />} />     
                
                <Route path="path_comum" 
                    caseSensitive={false} 
                    element={<Path_comum  />} />

                <Route path="caduser" 
                    caseSensitive={false} 
                    element={<CadUser  />} />   

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