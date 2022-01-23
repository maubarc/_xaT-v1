import  './Menu.css'
import  React   from    'react'

import {Link} from    'react-router-dom'

const   Menu    =   props   =>   (
    <aside  className="Menu">
        <nav>
            <ul>
                <li>
                    <Link   to  ="/">Inicio</Link>
                </li>

                <li>
                    <Link   to  ="servidor">Servidor</Link>
                </li>

                <li>
                    <Link   to  ="path_comum">Path_comum</Link>
                </li>

                <li>
                    <Link   to  ="cadUser">Cadastro de Usuarios</Link>
                </li>

                <li>
                    <Link   to  ="venda">Venda</Link>
                </li>
                
                <li>
                    <Link   to  ="inativo">Inativo</Link>
                </li>

            
                <li>
                    <Link   to  ="inativo">Inativo</Link>
                </li>

            </ul>
        </nav>
        

    </aside>
)

export  default Menu