import React from "react"
import { Link } from "react-router-dom"
import Form from "./Form"

export default function Create() {
    return(
        <div>
            <Link to='/home'>
            <button>Back go home</button>
            </Link>
            <Form/>
            <Link to='/details/id'>
            <button>Create recipe</button>
            </Link>
        </div>
    )
}