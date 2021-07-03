import React from 'react';

import Header from './Header';
import Hero from './Hero';
import Container from './Container';
import Pelicula from './Pelicula';
import useVideo from '../Hooks/useVideo';
import '../global.css';

const API='http://localhost:3000/todas';
function App(){

    const db=useVideo(API);
    console.log(db);
        
    return(
        <div className="contenedor_principal">
            <Header/>
            <Hero/>
            <p className="titulo_peliculas">Top TV picks for Jack</p>
            {db.peliculas.length>0 &&
                <Container>
                    {db.peliculas.map(item=>
                        <Pelicula key={item.id} {...item}/>
                    )}                     
                </Container>
            }

            <p className="titulo_peliculas">Trending now</p>
            {db.peliculas2.length>0 &&
                <Container>
                    {db.peliculas2.map(item=>
                        <Pelicula key={item.id} {...item}/>
                    )}                     
                </Container>
            }


        </div>
    )
        
}

export default App;