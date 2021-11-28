import React, { useEffect } from "react";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getDiets } from "../actions";


export default function Form() {
    const allDiets= useSelector((state)=>state.diets)
    const [recipe, setRecipe] = useState({
        name:'',
        summary:'',
        score:'',
        healthScore:'',
        steps:'',
        diets:[]
    })
     
    const dispatch= useDispatch()
    
    useEffect(()=>{
        dispatch(getDiets())
    },[dispatch])

    function handleChange(e) {
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        })
    }

    function selectDiets(e) {
        e.preventDefault()
        setRecipe({
            ...recipe,
            diets:[...recipe.diets, e.target.value]
        })
    }
    return(
        <div>
            <form onChange={handleChange} value=''>    
                <label>Name</label>
                <input type="text" placeholder='Name...' name='name' value={recipe.name}/>
                <label>Summary</label>
                <input type="text" placeholder='Summary...' name='summary' value={recipe.summary}/>
                <label>Score</label>
                <input type="text" placeholder='Score...' name='score' velue={recipe.summary}/>
                <label>Health Score</label>
                <input type="text" placeholder='Health Score...' name='healthScore' value={recipe.healthScore}/>
                <label>Steps</label>
                <input type="text" placeholder='Steps...' name='steps' value={recipe.steps}/>
                <label>select diets</label>
            </form>
            <select name="" id="" onChange={selectDiets}> {
                allDiets?.map(diet=>{
                   return <option value={diet.name}>{diet.name}</option>
                })
            } </select>
        </div>
    )
}


/* 
                <select name='diets' value='diets' onChange={selectDiets}>
                    <option value="gluten free">gluten free</option>
                    <option value="ketogenic">ketogenic</option>
                    <option value="vegetarian">vegetarian</option>
                    <option value="lacto-vegetarian">lacto-vegetarian</option>
                    <option value="ovo-vegetarian">ovo-vegetarian</option>
                    <option value="vegan">vegan</option>
                    <option value="pescetarian">pescetarian</option>
                    <option value="paleo">paleo</option>
                    <option value="primal">primal</option>
                    <option value="low FODMAP">low FODMAP</option>
                    <option value="whole30">whole30</option>
                </select>
 */
/* 

[ ] Un formulario controlado con los siguientes campos
Nombre
Resumen del plato
Puntuación
Nivel de "comida saludable"
Paso a paso
[ ] Posibilidad de seleccionar/agregar uno o más tipos de dietas
[ ] Botón/Opción para crear una nueva receta */