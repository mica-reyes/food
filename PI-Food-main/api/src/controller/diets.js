const {Diet} = require('../db')

const getDiets= (req, res, next)=>{
    try {
        Diet.findAll()
        .then(resp=>{
            res.send(resp)
        })
    
    } catch (error) {
        next(error)
    }
}

module.exports={
    getDiets
}