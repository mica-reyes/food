import React from "react";
import { sortName, sortScore} from "../../actions";
import { useDispatch } from "react-redux";
import style from '../Sort/Sort.module.css' 

export default function Sort() {
    const dispatch= useDispatch()
    
    function onChangeName(e) {
      dispatch(sortName(e.target.value))  
    }

    function onChangeScore(e) {
        dispatch(sortScore(e.target.value))  
      }
    return(
        <div>
                <label>Order by</label>
                <select onChange={onChangeName} className={style.select}>
                    {/* <option value="" selected disabled>Select option</option> */}
                    <option value=''>select</option>
                    <option value="A_Z">A-Z</option>
                    <option value="Z_A">Z-A</option>
                </select>

                <label>Order by Score</label>
                <select onChange={onChangeScore} className={style.select}>
                <option value=''>select</option>
                     {/* <option value="" selected disabled>Select option</option> */}
                    <option value="0-100">0-100</option>
                    <option value="100-0">100-0</option>
                </select>
        </div>
    )
}