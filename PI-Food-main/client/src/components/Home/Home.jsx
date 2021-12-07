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
    const filteredRecipes= useSelector(state=>state.filteredRecipes)
    const [currentPage, setCurrentPage]=useState(1);
    const [recipesPerPage]= useState(9);
    const indexOfLastRecipes= currentPage * recipesPerPage; 
    const indexOfFirstRecipes= indexOfLastRecipes - recipesPerPage;
    const currentRecipes= filteredRecipes.length? filteredRecipes.slice(indexOfFirstRecipes, indexOfLastRecipes):allRecipes.slice(indexOfFirstRecipes, indexOfLastRecipes)

    const paged= (pages)=>{
        setCurrentPage(pages)
    }   

    return(
        <div>
            <div className={style.flecha}>
            <Link to='/'>
                    <button className={style.button}>{'<<<'}</button>
            </Link>
                </div>
            <div className={style.contenedor}>
            <Search setCurrentPage={setCurrentPage}/>
            <Filter setCurrentPage={setCurrentPage}/>
            <Sort/>
            <Link to='/create'>
                <button className={style.button}>Create your recipe</button>
            </Link>
            </div>
            <Pagination recipesPerPage={recipesPerPage} filteredRecipes={filteredRecipes.length} allRecipes={allRecipes.length} paged={paged} currentPage={currentPage}/> 
            <Cards currentRecipes={currentRecipes}/>

        </div>
    )
}