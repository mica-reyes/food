import React from "react";
//import { Link } from "react-router-dom";

export default function Details({name, image, dishTypes, diets, summary, score, healthScore, steps }) {
    return(
        <div>
{/*             <h1>{name}</h1>
            <img src={image} alt="foto del plato"/>
            <ul>
                {dishTypes?.map(el=>{
                    <li>{el}</li>
                })}
            </ul>
            <Link to='/home'>
                <button>VOLVER</button>
            </Link> */}
        </div>
    )
}
/* [ ] Los campos mostrados en la ruta principal para cada receta (imagen, nombre, tipo de plato y tipo de dieta)
    //<Card name={el.name} image={el.image} id={el.id} diets={el.diets}
    //<ul>{diets?.map(el=><li>{el}</li>)}</ul>
[ ] Resumen del plato
[ ] Puntuación
[ ] Nivel de "comida saludable"
[ ] Paso a paso */