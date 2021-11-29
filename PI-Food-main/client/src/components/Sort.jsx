import React from "react";
import { sort} from "../actions";
import { useDispatch } from "react-redux";


export default function Sort() {
    const dispatch= useDispatch()
    function onChange(e) {
      dispatch(sort(e.target.value))  
    }
    return(
        <div>
            <div>
                <label>Order by</label>
                <select onChange={onChange}>
                    <option value="A_Z">A-Z</option>
                    <option value="Z_A">Z-A</option>
                </select>
            </div>
            <div>
                <label>Order by Score</label>
                <select>
                    <option value="0-100">0-100</option>
                    <option value="100-0">100-0</option>
                </select>
            </div>
        </div>
    )
}