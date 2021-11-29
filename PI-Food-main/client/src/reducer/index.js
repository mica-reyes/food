import { GET_RECIPES, GET_DIETS, GET_RECIPES_BY_NAME, SORT } from '../actions/index';
const initialState={
    recipes:[],
    diets:[],
    filteredRecipes:[],
    orderedRecipe:[]
}

function rootReducer(state=initialState, action){
    switch (action.type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: action.payload
            }
        case GET_DIETS:
            return{
                ...state,
                diets: action.payload
            }
        case GET_RECIPES_BY_NAME:
            return{
                ...state,
                recipes: action.payload
            }
        case SORT:
            const filteredRecipesSort= [...state.filteredRecipes]
            const orderedRecipes= filteredRecipesSort?.sort((a, b)=> {
                if(a.name>b.name && action.payload==='A_Z') return 1
                if(a.name>b.name && action.payload==='Z_A') return -1
                if(a.name<b.name && action.payload==='A_Z') return -1
                if(a.name<b.name && action.payload==='Z_A') return  1
                return 0
            })
            return{
                ...state,
                orderedRecipe: orderedRecipes
            }
        default:
            return state;
    }
}

export default rootReducer;

//a>b--->asc
//a<b---->asc
//a>b---->des
//a<b---->des
