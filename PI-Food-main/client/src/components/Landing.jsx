import React from "react";
import { Link } from "react-router-dom"
import './Landing.module.css'

export default function Landing() {
    return(
        <div
        style={{
            backgroundColor: 'red'
          }}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        >
            <Link to='/home'>
            <h1>Henry Food </h1>
                <button>Ingresar</button>
            </Link>
        </div>
    )
}