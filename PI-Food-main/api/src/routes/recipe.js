const {Router}= require('express');
const router= Router();
const { postRecipe }= require('../controller/recipe')

router.post('/', postRecipe)


module.exports= router