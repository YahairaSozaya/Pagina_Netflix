import {useState, useEffect} from 'react';

const useVideo=(API)=>{
    const [videos, setVideos]=useState({ peliculas: [], peliculas2:[]});

    useEffect(()=>{
        fetch(API)
            .then(response=>response.json())
            .then(data=>setVideos(data));
    }, []);

    console.log(videos);
    return videos;
};

export default useVideo;