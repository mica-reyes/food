const {Router} = require('express');
const router= Router();
const { getRecipesByName, getRecipesbyId }= require('../controller/recipes')

router.get('/', getRecipesByName)
router.get('/:id', getRecipesbyId)

module.exports = router;