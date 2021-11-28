import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import style from './Cards.module.css'

export default function Cards({currentRecipes}) {
    return(
        <div className={style.contenedor}>{
            currentRecipes?.map(el=>
                <Link to={`details/${el.id}`} style={{ textDecoration: 'none' }} key={el.id}>
                    <Card name={el.name} image={el.image} key={el.id} diets={el.diets}/>
                </Link>
            )
            }
        </div>
    )
}