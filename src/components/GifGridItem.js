import React from 'react'
import 'animate.css';

export const GifGridItem = ({id, title, url}) => {
    //console.log(props)
    console.log({id,title,url})
    
    return (
        <div className='card animate__animated animate__zoomInUp'>
            <div className="img-container" style={ 
                { backgroundImage: `url("${ url }")` }
             }>
            </div>
            <p>{title}</p>
        </div>
    )
}
