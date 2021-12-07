import React from "react";
import style from './Pagination.module.css'

export default function Pagination({recipesPerPage, allRecipes, filteredRecipes, paged, currentPage}) {
    const pages=[];
    let numerador= filteredRecipes? filteredRecipes: allRecipes
    for(let i=1; i<=Math.ceil(numerador/recipesPerPage); i++){
        pages.push(i)
    }
    return(
        <div>
            <nav>
                <ul className={style.pageNumber}>
                    {
                        pages?.map(number=>{return(
                            <li onClick={()=>paged(number)} key= {number} className={currentPage===number? style.active:null } >{number}
                        </li>
                    )
                })
            }
                </ul>
            </nav>
        </div>
    )
}
