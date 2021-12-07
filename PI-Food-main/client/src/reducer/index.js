import { GET_RECIPES, GET_DIETS, GET_RECIPES_BY_NAME, SORT_NAME, FILTER_BY_DIETS, SORT_SCORE, LOADING } from '../actions/index';
const initialState={
    recipes:[],
    diets:[],
    filteredRecipes:[],
    loading: false
}

function rootReducer(state=initialState, action){
    switch (action.type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: action.payload,
                loading: false
            }
        case GET_DIETS:
            return{
                ...state,
                diets: action.payload
            }
        case GET_RECIPES_BY_NAME:
                return{
                    ...state,
                    recipes: action.payload,
                    loading: false
                }
        case SORT_NAME:
            const copyyRecipes= state.filteredRecipes.length? [...state.filteredRecipes]:[...state.recipes]
            const orderedRecipes= copyyRecipes.sort((a, b)=> {
                if(a.name.toLowerCase()>b.name.toLowerCase() && action.payload==='A_Z') return 1
                if(a.name.toLowerCase()>b.name.toLowerCase() && action.payload==='Z_A') return -1
                if(a.name.toLowerCase()<b.name.toLowerCase() && action.payload==='A_Z') return -1
                if(a.name.toLowerCase()<b.name.toLowerCase() && action.payload==='Z_A') return  1
                return 0                
            })
            if(state.filteredRecipes.length){
                return{
                    ...state,
                    filteredRecipes:orderedRecipes
                }
            }else{
                return{
                    ...state,
                    recipes: orderedRecipes
                }
            }  
        case SORT_SCORE:   
            const copyRecipesScore= state.filteredRecipes.length? [...state.filteredRecipes]:[...state.recipes]
            const orderedRecipesScore= copyRecipesScore?.sort((a, b)=> {
                if(a.score>b.score && action.payload==="0-100") return 1
                if(a.score<b.score && action.payload==="0-100") return -1
                if(a.score>b.score && action.payload==='100-0') return -1
                if(a.score<b.score && action.payload==='100-0') return  1
                return 0
            })
            if(state.filteredRecipes.length){
                return{
                    ...state,
                    filteredRecipes:orderedRecipesScore
                }
            }else{
                return{
                    ...state,
                    recipes: orderedRecipesScore
                }
            } 
        case FILTER_BY_DIETS:
            const copyRecipes= [...state.recipes]
            const filter= copyRecipes.filter(recipe=>recipe.diets.find(el=>el===action.payload))
            if(action.payload==='all'){
                   return{
                       ...state,
                       filteredRecipes:[]
                   }
            }else if(!filter.length){
                alert('no matches found')
                return{
                   ...state,
                }
            }else{
                return{
                    ...state,
                    filteredRecipes: filter
                }
            } 
        case LOADING:
            return{
                ...state,
                loading: true
            }
        default:
            return state;
    }
}

export default rootReducer;

