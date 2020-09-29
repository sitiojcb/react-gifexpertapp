import React, { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

function GifGrid({category}) {
    const [images, setImages] = useState([])
    const [count, setCount] = useState(0);

    useEffect(() => {
        getGifs(category)
        // .then(imgs => setImages(imgs)) //que es igual a
            .then(setImages)
    }, [category])
//llevo getGifs a helpers/getGifs
    // const getGifs = async () => {
    //     const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=3jSX0TttTLhmjW4IgVEDkkFuB2nT63ms`;

    //     //const url = '';
    //     const resp = await fetch(url);
    //     const {data} = await resp.json();
    //     //console.log(data);
    //     const gifs = data.map(img => {
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url
    //         }
    //     });
    //     console.log(gifs);
    //     setImages(gifs);
    // }
   // getGifs(); //ahora uso en useEffects

  return (
      <>
      <h3 >{category}</h3>
    <div className='card-grid'>
      <h3>{count}</h3>
      <button onClick={() => setCount(count +1)}>+</button>
      {
          images.map(img => (
              <GifGridItem key={img.id}
              {...img} />
          ))
          }
      
    </div>
    </>
  )
}

export default GifGrid