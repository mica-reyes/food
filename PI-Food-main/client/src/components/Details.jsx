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
    }, [id])
    return(
        <div>
            <h1>{recipe.name}</h1>
            <img src={recipe.image} alt="foto del plato"/>
            {
                recipe.dishTypes &&       
                <div>
                <h3>dish types</h3>
                <ul>
                    {recipe.dishTypes?.map((el, index)=>{
                        return <li key={index}>{el}</li>
                })}
                </ul>
                </div>
            }
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
            {
                recipe.instructions && 
                <div>
                <h3>instructions</h3>
                <p>{recipe.instructions}</p>
                </div>
            }
            <Link to='/home'>
                <button>VOLVER</button>
            </Link> 
        </div>
    )
}
/* 
[ ] Paso a paso */