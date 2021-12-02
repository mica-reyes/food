import React from "react";
import style from './Card.module.css'

export default function Card({name, image, diets, id, score}){
    return(
        <div className={style.contenedor} key={id}>
            <h1>{name}</h1>
            <img src={image} alt="foto food" />
            <ul>{diets?.map((el, index)=><li key={index}>{el}</li>)}</ul>
        </div>
       )
    }
    