const {Recipe, Diet}= require('../db')
const axios= require('axios');
const db = require('../db');
require('dotenv').config();
const {
    API_KEY
}= process.env

const getRecipesByName = (req,res,next)=>{
    try { 
        const {name}= req.query
        const apiRecipesPromise= axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
        const dbRecipesPromise= Recipe.findAll({include: Diet})
    Promise.all([apiRecipesPromise, dbRecipesPromise])
    .then(resp=>{
        const[apiRecipes, dbRecipes]= resp;
        let apiRecipesData= apiRecipes.data.results
        let apiRecipesFormat= apiRecipesData.map(el=>{
            if(el.vegetarian && !el.diets?.find(el=>el==='vegetarian')) el.diets.push('vegetarian')
            if(el.vegan && !el.diets?.find(el=>el==='vegan')) el.diets.push('vegan')
            if(el.glutenFree && !el.diets?.find(el=>el==='gluten free')) el.diets.push('gluten free')
            if(el.dairyFree && !el.diets?.find(el=>el==='dairy free')) el.diets.push('dairy free')
            return{
                id:el.id,
                name: el.title,
                image: el.image,
                diets: el.diets,
                score: el.spoonacularScore,
                healthScore: el.healthScore,
            }
        })
        let dbRecipesFormat= dbRecipes?.map(el=>{return{
                id:el.id,
                name: el.name,
                image: el.image,
                summary:el.summary,
                score: el.score,
                healthScore: el.healthScore,
                instructions: el.instructions,
                diets: el.diets.map(el=>el.name),
        }}) 
        let allRecipes= apiRecipesFormat.concat(dbRecipesFormat)
        if(name){
            const fil= allRecipes.filter(el=>el.name.toLowerCase().includes(name.toLowerCase()))     
            return res.json(fil)      
        }
       return res.json(allRecipes)
    })
} catch (error) {
    next(error)
 }
} 

const getRecipesbyId= async(req,res,next)=>{
    const {id}= req.params
    try {
        if(id.length>15){
           const el= await Recipe.findByPk(id, {include: Diet})
           const obj={
                name: el.name,
                image: el.image,
                diets: el.diets?.map(el=>el.name),
                summary: el.summary,
                score: el.score,
                healthScore: el.healthScore,
                instructions: el.instructions
           }
            return res.json(obj)
        }
        const resp= await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
        const el= await resp.data
        const obj= {
            name: el.title,
            image: el.image,
            dishTypes: el.dishTypes,
            diets: el.diets,
            summary: el.summary.replace(/<[^>]*>?/g, ""),
            score: el.spoonacularScore,
            healthScore: el.healthScore,
            instructions: el.analyzedInstructions[0]?.steps.map(element=>{
               return element.step
             }).join()
        }
        return res.json(obj)
    } catch (error) {
         next(error)
        }
}

module.exports= {
    getRecipesByName,
    getRecipesbyId
}
