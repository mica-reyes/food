import React from "react";
import { filterByDiets } from "../../actions";
import {useDispatch, useSelector} from 'react-redux';
import style from '../Filter/Filter.module.css'

export default function Filter() {
    const allDiets= useSelector(state=>state.diets)
    const dispatch= useDispatch()

    function handleChange(e) {
       dispatch(filterByDiets(e.target.value))
    }
    
    return(
        <div>
            <label>Seleccionar Receta</label>
            <select onChange={handleChange} className={style.select}>{
                <>
                {/* <option value='select' selected disabled>select</option> */}
               { allDiets.map(el=>{
                    return <option value={el.name} key={el.id}>{el.name}</option>
                })}
                </ >
            }
            </select>
        </div>
    )
}