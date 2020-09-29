import React, { useState } from "react"
import PropTypes from 'prop-types'
// en lugar de mandar props desde GifExpertApp, desestructuramos el setInputValue
function AddCategory({ setCategories }) {

    const [inputValue, setInputValue] = useState('')
//recordar que si no pongo nada da error undefined!!!

    const handleInputChange = (e) => {
            const valor = e.target.value;
            //console.log(valor);
        setInputValue(valor)
        }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats])
            //reseteo el valor agregado
            setInputValue('')
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text"
        value={inputValue}
        onChange={handleInputChange}
        />
    </form>
  )
}
        AddCategory.propTypes = {
            setCategories: PropTypes.func.isRequired
        }
// 
export default AddCategory