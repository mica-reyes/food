import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getDiets } from "../actions";
import { useHistory } from "react-router";



export default function Form() {
    const allDiets= useSelector((state)=>state.diets)

    const [recipe, setRecipe] = useState({
        recipes:{
            name:'',
            summary:'',
            score:'',
            healthScore:'',
            instructions:'',
        },
        dietId:[]
    })
     
    let history=useHistory();
    const dispatch= useDispatch()
    
    useEffect(()=>{
        dispatch(getDiets())
    },[dispatch])

    function handleChange(e) {
        e.preventDefault()
        setRecipe({
            ...recipe,
            recipes:{
                ...recipe.recipes,
                [e.target.name]: e.target.value
            }
        })
    }

    function selectDiets(e) {
  /*       e.preventDefault() */
        setRecipe({
            ...recipe,
            dietId:[...recipe.dietId, e.target.value]
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:3001/recipe', recipe)
        .then(()=>{
            history.push('/home')
        }) 
    }

    return(
        <div>
            <form onSubmit={handleSubmit} value=''>    
                <label>Name</label>
                <input type="text" placeholder='Name...' onChange={handleChange}  name='name' value={recipe.recipes.name}/>
                <label>Summary</label>
                <input type="text" placeholder='Summary...' onChange={handleChange}  name='summary' value={recipe.recipes.summary}/>
                <label>Score</label>
                <input type="number" min="0" max="100" placeholder='Score...' onChange={handleChange} name='score' velue={recipe.recipes.summary}/>
                <label>Health Score</label>
                <input type="number" min="0" max="100" placeholder='Health Score...' onChange={handleChange}  name='healthScore' value={recipe.recipes.healthScore}/>
                <label>instructions</label>
                <input type="text" placeholder='instructions...' onChange={handleChange}  name='instructions' value={recipe.recipes.instructions}/>
                <label>select diets</label>
                
                <select onChange={selectDiets}> {
                    allDiets?.map(diet=>{
                        return <option value={diet.id} key={diet.id}>{diet.name}</option>
                    })
                } </select>
                <input type="submit" value='Create recipe' />
            </form>
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