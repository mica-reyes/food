import React from "react";
import { filterByDiets, getRecipes } from "../../actions";
import {useDispatch, useSelector} from 'react-redux';
import style from '../Filter/Filter.module.css';


export default function Filter({setCurrentPage}) {
    const allDiets= useSelector(state=>state.diets)
    const dispatch= useDispatch()

    function handleChange(e) {
        e.preventDefault()
        if(e.target.value==='all'){
            dispatch(getRecipes())
        }else{
            dispatch(filterByDiets(e.target.value))
            setCurrentPage(1)  
        }
    }
    
    return(
        <div>
            <label>Filter by Diet</label>
            <select onChange={handleChange} className={style.select}>{
                <>
                <option value=''>select</option> 
                <option value="all">all</option>
               { allDiets.map(el=>{
                    return <option value={el.name} key={el.id}>{el.name}</option>
                })}
                </ >
            }
            </select>
        </div>
    )
}