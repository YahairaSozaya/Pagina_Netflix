import React from 'react';
import netflix from '../images/netflix.png';
import './styles/Header.css';

class Header extends React.Component{
    render(){
        return(
            <div className="contenedor_header">
                <div><img className="logo_netflix" src={netflix} alt="logo de Netflix"></img></div>
                <div className="contenedor_menu">
                    <a href="/" className="lista_menu"><p>Browse</p></a>
                    <a href="/" className="lista_menu"><p>My list</p></a>
                    <a href="/" className="lista_menu"><p>Top picks</p></a>
                    <a href="/" className="lista_menu"><p>Recent</p></a> 
                </div>

                <div className="contenedor_input">
                    <input className="input" type="text" placeholder="Search for a tittle..."/>
                </div>
            </div>
        )
    }
}

export default Header;