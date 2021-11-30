import React from "react"
import { Link } from "react-router-dom"
import Form from "./Form"

export default function Create({diets}) {
    return(
        <div>
            <Link to='/home'>
            <button>Back go home</button>
            </Link>
            <Form/>
        </div>
    )
}