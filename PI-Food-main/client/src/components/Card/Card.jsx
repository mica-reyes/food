import React from "react";
import style from './Card.module.css'

export default function Card({name, image, diets, id}){
    return(
        <div className={style.contenedor} key={id}>
            <img src={image} alt="foto food" />
            <h1>{name}</h1>
            <div>
                <h3>diets types:</h3>
                {
                diets.length<1? <p>no diets found</p>:
                <p>{diets?.map((el)=>` -${el}` )}</p>
            }
            </div>
        </div>
       )
    }
    