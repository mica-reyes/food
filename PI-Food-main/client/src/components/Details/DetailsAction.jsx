import React, { useEffect/* , useState */ } from "react";
import { Link } from "react-router-dom";
//import axios from 'axios'
import { useParams } from "react-router";
import style from '../Details/Details.module.css';
import { getRecipeById } from "../../actions";
import {useSelector, useDispatch} from 'react-redux'

export default function Details() {
    //const [recipe, setRecipe]= useState({})
    const {id}= useParams()
    const dispatch= useDispatch()
    const recipe= useSelector((state)=>state.details)

    /*     function getRecipeById(id) {
        axios.get(`http://localhost:3001/recipes/${id}`)
        .then(recipe=>{
            setRecipe(recipe.data)
            console.log(recipe.data)
        })
    } */
    
    useEffect(()=>{
        dispatch(getRecipeById(id))
        console.log(recipe)
    }, [id])
    return(
        <div className={style.one}>
            <div className={style.three}>
                <div>
                    <h3>summary</h3>
                    <p>{recipe.summary}</p>
                    {
                        recipe.instructions && 
                        <div>
                        <h3>instructions</h3>
                        <p>{recipe.instructions}</p>
                        </div>
                    }
                </div>
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
                {
                    recipe.diets &&
                    <div>
                        <h3>diets types</h3>
                        <ul>
                            {
                                recipe.diets?.map((el, index)=>{
                                    return <li key={index}>{el}</li>
                                })
                            }
                        </ul>
                    </div>
                        }
            <Link to='/home'>
                <button className={style.button}>VOLVER</button>
            </Link> 
            </div>
<div className={style.two}>
    <h1>{recipe.name}</h1>
    <img src={recipe.image} alt="foto del plato"/>
    <h3>score: {recipe.score}</h3>
    <h3>health score: {recipe.healthScore}</h3>
</div>
        </div>
    )
}
