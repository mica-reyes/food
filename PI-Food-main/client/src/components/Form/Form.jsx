import React from "react";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { postRecipe} from "../../actions";
import { useHistory } from "react-router";
import style from '../Form/Form.module.css'

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

    function handleSelect(e) {
    if(e.target.checked){
        setRecipe({
            ...recipe,
            dietId:[...recipe.dietId, e.target.value]
            })
        }
        if(!e.target.checked){
            const filter= [...recipe.dietId].filter(el=>el!==e.target.value)
            setRecipe({
                ...recipe,
                dietId: filter
            })
        }    
    }


    function handleSubmit(e) {
        e.preventDefault()
        dispatch(postRecipe(recipe))
        history.push(`/home`)
    }

    return(
        <div className={style.contenedor}>
            <form onSubmit={handleSubmit} value=''>    
            <div>
                <div>
                    <label>Name</label>
                    <br />
                    <input type="text" placeholder='Name...' onChange={handleChange}  name='name' value={recipe.recipes.name} required/>
                </div>
                <div>
                    <label>Summary</label>
                <br/>
                <textarea onChange={handleChange} cols="30" rows="3" name='summary' value={recipe.recipes.summary}></textarea>    
                </div>
                <div>
                    <label>Score</label>
                    <br />
                    <input type="number" min="0" max="100" placeholder='Score...' onChange={handleChange} name='score' velue={recipe.recipes.summary}/>
                </div>
                <div>
                    <label>Health Score</label>
                    <br />  
                    <input type="number" min="0" max="100" placeholder='Health Score...' onChange={handleChange}  name='healthScore' value={recipe.recipes.healthScore}/>
                </div>
                <div>
                    <label>instructions</label>
                    <textarea onChange={handleChange} cols="30" rows="3" name='instructions' value={recipe.recipes.instructions}></textarea>
                </div>
            </div>
                <label>select diets</label> 
            <div className={style.select}>
                {
                    allDiets.map((diet, index)=>{
                        return (
                            <div key={index}>
                                <label >{diet.name}</label>
                                <input type="checkbox" value={diet.id} name={diet.name} onChange={handleSelect}/>
                            </div>
                            )
                        })
                    }         
            </div>
                <input type="submit" value='Create recipe' className={style.button}/>
            </form>
        </div>
    )
}