import React from "react"
import { Link } from "react-router-dom"
import Form from "../Form/Form"
import style from '../Create/Create.module.css'

export default function Create() {
    return(
        <div>
            <Link to='/home'>
            <button className={style.button}>Go back</button>
            </Link>
            <Form/>
        </div>
    )
}