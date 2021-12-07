import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipes, getRecipesByName } from "../../actions/index";
import style from '../Search/Search.module.css'


export default function Search({setCurrentPage}) {
    const dispatch= useDispatch()
    const [name, setName]= useState('')


    function onInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }

    function onClick(e) {
        e.preventDefault()
        dispatch(getRecipesByName(name))
        setCurrentPage(1)
    }

    function volverAcargar(){
        dispatch(getRecipes())
    }
    return(
        <form >
            <button onChange={volverAcargar} className={style.buttonX}>X</button>
            <input onChange={onInputChange} value={name} className={style.input} placeholder= 'Search recipe...'/>
            <button onClick={onClick} className={style.button}>Search</button> 
        </form>
    )
}