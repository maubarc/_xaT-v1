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
                    <Link   to  ="/param/111">Param #01</Link>
                </li>
                <li>
                    <Link   to  ="/param/222">Param #02</Link>
                </li>
                <li>
                    <Link   to  ="/calculadora">Calculadora</Link>
                </li>

                <li>
                    <Link   to  ="/about">Sobre</Link>
                </li>
                <li>
                    <Link   to  ="*">TODOS</Link>
                </li>
                <li>
                    <Link   to  ="usestate">UseState</Link>
                </li>
                <li>
                    <Link   to  ="useeffect">UseEffect</Link>
                </li>
                <li>
                    <Link   to  ="useref">UseRef</Link>
                </li>
                <li>
                    <Link   to  ="usememo">UseMemo</Link>
                </li>
                <li>
                    <Link   to  ="usecallback">UseCallback</Link>
                </li>
                <li>
                    <Link   to  ="monitor">Monitor</Link>
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
                    <Link   to  ="loguin">Loguin</Link>
                </li>
                <li>
                    <Link   to  ="venda">Venda</Link>
                </li>
                <li>
                    <Link   to  ="inativo">Inativo</Link>
                </li>

            </ul>
        </nav>
        

    </aside>
)

export  default Menu