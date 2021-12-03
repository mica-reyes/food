import React,{ useState } from "react";
import Cards from "../Cards/Cards";
import Search from "../Search/Search";
import Filter from "../Filter/Filter";
import Sort from "../Sort/Sort.jsx";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import { useSelector } from "react-redux";
import style from './Home.module.css'

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
    console.log(allRecipes.map(el=>el))
    return(
        <div>
            <div className={style.contenedor}>
            <Search/>
            <Filter/>
            <Sort/>
            <Link to='/create'>
                <button className={style.button}>Create your recipe</button>
            </Link>
            </div>
            <Pagination recipesPerPage={recipesPerPage} allRecipes={allRecipes.length} paged={paged} currentPage={currentPage}/> 
            <Cards currentRecipes={currentRecipes}/>

        </div>
    )
}