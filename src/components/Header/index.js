import React, {useState, useEffect} from 'react';
import {ContainerHeader, ContentHeader, Li, Button} from './style'
import {Link} from 'react-router-dom'
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'


function Header(){

    const [menu, setMenu] = useState(false)
    const [menuEmpresa, setMenuEmpresa] = useState(false)

    function viewMenu(){
        if(menu == true){
            setMenu(false)
        }else{
            setMenu(true)
        }
    }

    function viewMenuEmpresa(){
        if(menuEmpresa == true){
            setMenuEmpresa(false)
        }else{
            setMenuEmpresa(true)
        }
    }

   

    return(
        <ContainerHeader>
            <ContentHeader>
                <div>
                    <img src="/images/logomoc2.png"/>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <Li onClick={viewMenuEmpresa}>Empresas
                            {menuEmpresa == true? <b><MdKeyboardArrowUp/></b>: <b><MdKeyboardArrowDown/></b> }
                            {menuEmpresa &&(
                                <ul>
                                    <li>Empresa 1</li>
                                    <li>Empresa 2</li>
                                    <li>Empresa 3</li>
                                    <li>Empresa 4</li>
                                    <li>Empresa 5</li>
                                    <li>Empresa 6</li>
                                </ul>
                            )}
                        </Li>
                        <Li onClick={viewMenu}>Categorias
                        {menu == true? <b><MdKeyboardArrowUp/></b>: <b><MdKeyboardArrowDown/></b> }
                        {menu &&(
                            <ul>
                                <li>Restaurantes</li>
                                <li>Lanches</li>
                                <li>Bares</li>
                                <li>Pizzarias</li>
                                <li>Pet Shoop</li>
                                <li>Estetica</li>
                            </ul>
                        )}
                        </Li>
                        <li><Link>Fazer Login</Link></li>
                        <li><Link>Cadastrar</Link></li>
                        <li><Link>Contact</Link></li>
                    </ul>
                </nav>  
            </ContentHeader>
            <h1>Tudo o que você prescisar em um só lugar</h1>
            <div>
                <Button>Cadastrar Empresar</Button>
                <Button>Ver Empresas</Button>
            </div>
            
        </ContainerHeader>
    )
}

export default Header;