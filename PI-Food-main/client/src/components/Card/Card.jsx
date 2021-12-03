import React from "react";
import style from './Card.module.css'

export default function Card({name, image, diets, id, score}){
    return(
        <div className={style.contenedor} key={id}>
            <img src={image} alt="foto food" />
            <h1>{name}</h1>
            <div>
                <ul>{diets?.map((el, index)=><li key={index}>{el}</li>)}</ul>
            </div>
        </div>
       )
    }
    