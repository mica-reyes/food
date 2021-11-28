const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipes= require('./recipes');
const diets= require('./diets');
const recipe= require('./recipe')



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/recipe', recipe)
router.use('/recipes', recipes)
router.use('/diets', diets)


module.exports = router;
