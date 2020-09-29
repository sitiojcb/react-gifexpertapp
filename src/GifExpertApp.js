import React, { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from './components/GifGrid'

function GifExpertApp() {

    const [categories, setCategories] = useState(['One Punch'])

  return (
    <>
      <h2 className="titulo">Gif Expert App</h2>
      <small className="buscar">Buscar gif</small>
      <AddCategory setCategories={setCategories} />
      <hr/>
      
      <ol>
          {
            categories.map(category => (
              <GifGrid 
              key={category}
              category={category} />
            ))
          }
      </ol>
    </>
  )
}

export default GifExpertApp