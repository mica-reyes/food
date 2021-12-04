import axios from 'axios'; 
export const GET_RECIPES= 'GET_RECIPES';
export const GET_DIETS= 'GET_DIETS';
export const GET_RECIPES_BY_NAME ='GET_RECIPES_BY_NAME';
export const SORT_NAME ='SORT_NAME';
export const FILTER_BY_DIETS='FILTER_BY_DIETS';
export const SORT_SCORE ='SORT_SCORE';
export const POST_RECIPE='POST_RECIPE'

export function getRecipes(){
    return function(dispatch){
        axios.get('http://localhost:3001/recipes')
        .then(resp=>{
            dispatch({
                type: GET_RECIPES,
                payload: resp.data
            })
        })
    }
}

export function getRecipesByName(name){
    return function(dispatch){
        axios.get(`http://localhost:3001/recipes?name=${name}`)
        .then(resp=>{
            dispatch({
                type: GET_RECIPES_BY_NAME,
                payload: resp.data
            })
        })
    }
}

export function getDiets(){
    return async function(dispatch){
       const diets= await axios.get('http://localhost:3001/diets')
       dispatch({
           type:GET_DIETS,
           payload: diets.data
       })
    }
}

export function postRecipe(recipe){
    return async function(dispatch){
        const awaitRecipe= await axios.post('http://localhost:3001/recipe', recipe)
        dispatch({
            type: POST_RECIPE,
            payload: awaitRecipe.data
        })
    }
}

export function sortName(order){
    return {
        type: SORT_NAME,
        payload: order
    }
}

 export function sortScore(order){
    return {
        type: SORT_SCORE,
        payload: order
    }
} 

export function filterByDiets(filter){
    return{
        type: FILTER_BY_DIETS,
        payload:filter
    }
}