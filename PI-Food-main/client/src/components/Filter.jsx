import React from "react";

export default function Filter() {
    return(
        <div>
            <label>Seleccionar Receta</label>
            <select name="" id="">
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
        </div>
    )
}