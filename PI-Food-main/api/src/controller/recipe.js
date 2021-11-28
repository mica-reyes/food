const {Recipe, Diet}= require('../db')

const postRecipe= (req, res, next)=>{
    try {
        const {recipes, dietId}=req.body
        if(recipes){
            const {name, summary, score, healthScore, instructions, diet}= recipes
            Recipe.create({
                name, 
                summary, 
                score, 
                healthScore, 
                instructions, 
                diet})
                .then(recipe=>{
                    dietId.map(async el=>{recipe.addDiet(el)})
                    res.send(recipe)
                })       
            }  
    } catch (error) {
        next(error)
    }
}

module.exports={
    postRecipe
}

