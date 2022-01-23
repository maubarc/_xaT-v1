import  React from  "react";

import  './App.css';
import  Primeiro  from  "./componentes/basicos/Primeiro";
import  ComParametro  from  "./componentes/basicos/ComParametro";
import  Fragmento from  "./componentes/basicos/Fragmento";
import  Aleatorios  from    "./componentes/basicos/Aleatorios";
import  Card from "./componentes/layout/Card";
import  TabelaProdutos  from    "./componentes/repeticao/TabelaProdutos";
import  TabelaFuncionarios    from    "./componentes/repeticao/TabelaFuncionarios";
import  ParOuImpar  from    "./componentes/condicional/ParOuImpar";
import  UsuarioInfo from    "./componentes/condicional/UsuarioInfo"
import  DiretaPai from "./componentes/comunicacao/DiretaPai";
import  IndiretaPai from "./componentes/comunicacao/IndiretaPai";
import  Input   from    "./componentes/formulario/Input";
import  Contador   from    "./componentes/contador/Contador";





export  default ()  =>  (
    <div    className="App">
            <h1>Fundamentos React</h1>

            <div    className="Cards">

                <Card titulo="#11 - Contador"  color="#ff6f00">
                    <Contador   numeroInicial={0} />
                </Card>
                
                <Card titulo="#10 - Input"  color="rgb(255, 0, 111)">
                    <Input />
                </Card>

                <Card titulo="#09 - Comunicação indireta"  color="rgb(3, 131, 242)">
                   <IndiretaPai />
                </Card>

                <Card titulo="#08 - Comunicação direta"  color="rgb(0, 214, 175)">
                    <DiretaPai  />
                </Card>

                <Card titulo="#07 - Condicional"  color="rgb(173, 14, 226)">
                    <ParOuImpar numero={11}/>  
                    <UsuarioInfo    usuario={{nome:'Jaoda12'}}/> 
                </Card>    
                
                <Card titulo="#06 - Cadastro de Funcionarios"  color="rgb(0, 214, 175)">
                    <TabelaFuncionarios />
                </Card>

                <Card titulo="#05 - Tabelas de Produtos"  color="rgb(148, 148, 14)">
                    <TabelaProdutos />
                </Card>
            
                <Card titulo="#04 - Gerador Aleatorio"  color="#000750">
                    <Aleatorios min={10} max={100} />
                </Card>

                <Card titulo="#03 - Fragmento"  color="#030">
                    <Fragmento  />
                </Card>

                <Card titulo="#02 - Com Parametro"   color="#FA6900">
                    <ComParametro 
                    titulo  =   "Situação   do  aluno"
                    aluno   =   "Pedro"
                    nota    =   {8}
                    />
                </Card>

                <Card titulo="#01 - Componentes"   color="#e69a65">
                    <Primeiro></Primeiro>
                </Card>

            </div>
            
            
    </div>
);

