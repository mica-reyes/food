import { GET_RECIPES, GET_DIETS } from '../actions/index';
const initialState={
    recipes:[],
    diets:[]
}

function rootReducer(state=initialState, action){
    switch (action.type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: action.payload
            }
        case GET_DIETS:
            console.log(action.payload)
            return{
                ...state,
                diets: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;