import React from 'react';
import './styles/Container.css';

function Container (props){
    return(
        <div className="contenedor_peliculas">
            {props.children}
        </div>
    )
}

export default Container;

