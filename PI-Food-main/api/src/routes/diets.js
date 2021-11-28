const {Router}= require('express')
const router= Router()
const {getDiets} = require('../controller/diets')

router.get('/', getDiets)

module.exports= router