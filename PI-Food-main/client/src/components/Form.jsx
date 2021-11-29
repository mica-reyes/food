import React, { useEffect } from "react";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getDiets } from "../actions";


export default function Form() {
    const allDiets= useSelector((state)=>state.diets)
    const [recipe, setRecipe] = useState({
        recipes:{

            name:'',
            summary:'',
            score:'',
            healthScore:'',
            steps:'',
        },
        dietId:[]
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
            <select name="diets" onChange={selectDiets}> {
                allDiets?.map(diet=>{
                   return <option value={diet.id} key={diet.id}>{diet.name}</option>
                })
            } </select>
        </div>
    )
}

/* <ul>{
                recipe.diets?.map((diet, index)=>{
                    return <li key={index}>
                        {diet}
                    </li>
                })}
            </ul> */