import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useParams } from "react-router";

export default function Details() {
    const [recipe, setRecipe]= useState({})
    const {id}= useParams()

    function getRecipeById(id) {
        axios.get(`http://localhost:3001/recipes/${id}`)
        .then(recipe=>{
            setRecipe(recipe.data)
        })
    }

    useEffect(()=>{
        getRecipeById(id)
    }, [])
    return(
        <div>
            <h1>{recipe.name}</h1>
            <img src={recipe.image} alt="foto del plato"/>
            <h3>dish types</h3>
            <ul>
                {recipe.dishTypes?.map((el, index)=>{
                   return <li key={index}>{el}</li>
                })}
            </ul>
            <h3>diets types</h3>
            <ul>
                {
                    recipe.diets?.map((el, index)=>{
                        return <li key={index}>{el}</li>
                    })
                }
            </ul>
            <h3>summary</h3>
            <p>{recipe?.summary}</p>
            <h3>score: {recipe.score}</h3>
            <h3>health score: {recipe.healthScore}</h3>
            <h3>steps</h3>
            <ol>{
                recipe.steps?.map((el, index)=>{
                    return <li key={index}>{el?.step}</li>
                })}</ol>
            <Link to='/home'>
                <button>VOLVER</button>
            </Link> 
        </div>
    )
}
/* 
[ ] Paso a paso */