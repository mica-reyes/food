import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipesByName } from "../actions";


export default function Search() {
    const dispatch= useDispatch()
    const [name, setName]= useState('')


    function onInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }

    function onClick(e) {
        e.preventDefault()
        dispatch(getRecipesByName(name))
    }
    return(
        <form >
            <label>Search recipe...</label>
            <input onChange={onInputChange} value={name}/>
            <button onClick={onClick}>Search</button> 
        </form>
    )
}