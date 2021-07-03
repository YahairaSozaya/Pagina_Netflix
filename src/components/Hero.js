import React from 'react';
import './styles/Hero.css';

class Hero extends React.Component{
    render(){
        return(
            <div className="contenedor_hero">
                <div>
                    <p className="title">Season 2 now Available</p>
                </div>
                    
                <div>
                    <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id quam <br></br>sapiente unde voluptatum alias vero debitis, magnam quis quod.</p>
                </div>

                <div className="contenedor_botones">
                    <button className="boton_hero red">Watch now</button>
                    <button className="boton_hero gris">+My list</button>
                </div>

            </div>
        )
    }
}

export default Hero;