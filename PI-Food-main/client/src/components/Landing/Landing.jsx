import React from "react";
import { Link } from "react-router-dom"
import style from './Landing.module.css'

export default function Landing() {
    return(
        <div                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       >
            <h1 className={style.h1}>Henry Food </h1>
            <Link to='/home'>
                <button className={style.button}>Enter</button>
            </Link>
        </div>
    )
}