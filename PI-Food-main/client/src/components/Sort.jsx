import React from "react";
import { sortName, sortScore} from "../actions";
import { useDispatch } from "react-redux";


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
            <div>
                <label>Order by</label>
                <select onChange={onChangeName}>
                    <option value="A_Z">A-Z</option>
                    <option value="Z_A">Z-A</option>
                </select>
            </div>
            <div>
                <label>Order by Score</label>
                <select onChange={onChangeScore}>
                    <option value="0-100">0-100</option>
                    <option value="100-0">100-0</option>
                </select>
            </div>
        </div>
    )
}