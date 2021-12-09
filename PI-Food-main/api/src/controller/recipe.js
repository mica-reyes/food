const {Recipe, Diet}= require('../db')

const postRecipe= (req, res, next)=>{
    try {
        const {recipes, dietId}=req.body
        if(recipes){
            const {name, summary, score, healthScore, instructions, image}= recipes
            Recipe.create({
                name, 
                summary, 
                image,
                score, 
                healthScore, 
                instructions
            })
                .then(recipe=>{
                    dietId.map(async el=>{recipe.addDiet(el)})
                    res.json(recipe)
                })       
            }  
    } catch (error) {
        next(error)
    }
}

module.exports={
    postRecipe
}

