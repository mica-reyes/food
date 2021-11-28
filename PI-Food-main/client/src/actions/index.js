import axios from 'axios'; 
export const GET_RECIPES= 'GET_RECIPES';
export const GET_DIETS= 'GET_DIETS';

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

export function getDiets(){
    return async function(dispatch){
       const diets= await axios.get('http://localhost:3001/diets')
       dispatch({
           type:GET_DIETS,
           payload: diets.data
       })
    }
}