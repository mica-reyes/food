import { GET_RECIPES, GET_DIETS, GET_RECIPES_BY_NAME, SORT_NAME, FILTER_BY_DIETS, SORT_SCORE } from '../actions/index';
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
        case SORT_NAME:
            const recipesSortName= [...state.recipes]
            const orderedRecipes= recipesSortName?.sort((a, b)=> {
                if(a.name.toLowerCase()>b.name.toLowerCase() && action.payload==='A_Z') return 1
                if(a.name.toLowerCase()>b.name.toLowerCase() && action.payload==='Z_A') return -1
                if(a.name.toLowerCase()<b.name.toLowerCase() && action.payload==='A_Z') return -1
                if(a.name.toLowerCase()<b.name.toLowerCase() && action.payload==='Z_A') return  1
                return 0
                
            })
            return{
                ...state,
                recipes: orderedRecipes
            }
        case SORT_SCORE:   
        const recipesSortScore= [...state.recipes]
        const orderedRecipesScore= recipesSortScore?.sort((a, b)=> {
            if(a.score>b.score && action.payload==="0-100") return 1
            if(a.score>b.score && action.payload==='100-0') return -1
            if(a.score<b.score && action.payload==="0-100") return -1
            if(a.score<b.score && action.payload==='100-0') return  1
            return 0
        })
        return{
            ...state,
            recipes: orderedRecipesScore
        }
        case FILTER_BY_DIETS:
            const copyRecipes= [...state.recipes]
            const filter= copyRecipes.filter(recipe=>recipe.diets.find(el=>el===action.payload))
            return{
                ...state,
                recipes: filter
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
