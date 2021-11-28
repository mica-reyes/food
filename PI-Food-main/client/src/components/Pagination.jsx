import React from "react";
//import './Pagination.module.css'

export default function Pagination({recipesPerPage, allRecipes, paged}) {
    const pages=[];
    
    for(let i=1; i<=Math.ceil(allRecipes/recipesPerPage); i++){
        pages.push(i)
    }
    return(
        <div>
            <nav>
                <ul className="pageNumbers">
                    {
                        pages?.map(number=>{return(
                            <li onClick={()=>paged(number)} key= {number} style={{cursor:'pointer'}}>{number}
                        </li>
                    )
                })
            }
                </ul>
            </nav>
        </div>
    )
}
