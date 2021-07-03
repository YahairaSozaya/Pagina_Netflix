import React from 'react';
import './styles/Pelicula.css';

class Pelicula extends React.Component{
    state={
        activo:true
    }

    handleClick=(e)=>{
        
        if(this.state.activo){
            e.target.style.background ="red";
            e.target.style.border="2px solid red";
            this.setState({activo:false});
        }

        if(!this.state.activo){
            e.target.style.background ="transparent";
            e.target.style.border="2px solid white";
            this.setState({activo:true});
        }
        
    }



    render(){
        return(
            <div id="Pelicula_Item" className="Pelicula_Item">
                <div className="imagen_contenedor">
                    <img className="imagen_pelicula" src={this.props.video} alt="video"/>
                </div>
    
    
                <div className="contenedor_pelicula">
                    <div className="nombre_boton">
                        <p className="titulo">{`${this.props.nombre}`}</p>
                        <button className="boton_redondo" onClick={this.handleClick}></button>
                    </div>
                    
                    <p>Director: {`${this.props.director}`}</p>
                    <p>Clasificación: {`${this.props.clasificacion}`}</p>
                </div>
                
            </div>
        )
    }
    
}




export default  Pelicula;