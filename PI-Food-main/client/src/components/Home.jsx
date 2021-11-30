import React,{ useState } from "react";
import Cards from "./Cards";
import Search from "./Search";
import Filter from "./Filter";
import Sort from "./Sort";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";

export default function Home() {
    const allRecipes= useSelector((state)=>state.recipes);
    const [currentPage, setCurrentPage]=useState(1);
    const [recipesPerPage]= useState(9);
    const indexOfLastRecipes= currentPage * recipesPerPage; 
    const indexOfFirstRecipes= indexOfLastRecipes - recipesPerPage;
    const currentRecipes= allRecipes.slice(indexOfFirstRecipes, indexOfLastRecipes)

    const paged= (pages)=>{
        setCurrentPage(pages)
    }   
    console.log(currentRecipes)
    return(
        <div>
            <Search/>
            <Filter/>
            <Sort/>
            <Link to='/create'>
                <button>Create your recipe</button>
            </Link>
            <Cards currentRecipes={currentRecipes}/>
            <Pagination recipesPerPage={recipesPerPage} allRecipes={allRecipes.length} paged={paged}/> 

        </div>
    )
}