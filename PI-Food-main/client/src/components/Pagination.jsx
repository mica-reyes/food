import React from "react";
import style from './Pagination.module.css'

export default function Pagination({recipesPerPage, allRecipes, paged}) {
    const pages=[];
    
    for(let i=1; i<=Math.ceil(allRecipes/recipesPerPage); i++){
        pages.push(i)
    }
    return(
        <div>
            <nav>
                <ul className={style.pageNumber}>
                    {
                        pages?.map(number=>{return(
                            <li onClick={()=>paged(number)} key= {number} className={style.li} style={{cursor:'pointer'}}>{number}
                        </li>
                    )
                })
            }
                </ul>
            </nav>
        </div>
    )
}
