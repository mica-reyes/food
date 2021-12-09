import React from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import style from './Cards.module.css';
import { useSelector } from "react-redux";

export default function Cards({currentRecipes}) {
    const loadingState= useSelector(state=>state.loading)
    
    function loadingFunction(){
        if(loadingState ){
            return <h1 className={style.loading}>LOADING...</h1>
        }
        return (!currentRecipes.length?
        <div className={style.nofound}>
                <h1>recipe no found</h1>
        </div>: 
        <div className={style.contenedor}>{
            currentRecipes?.map(el=>
                <Link to={`details/${el.id}`} style={{ textDecoration: 'none' }} key={el.id}>
                    <Card name={el.name} image={el.image} key={el.id} diets={el.diets}/>
                </Link>
            )
            }
        </div>)
    }
    return(
        <div>
            {loadingFunction()}
        </div>
    )
}