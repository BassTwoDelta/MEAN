const { Cat } = require('../models/cats')

module.exports = {

    index: function(req,res){
        Cat.find()
        .then(cats => {
            res.json(cats)
        })
        .catch(err => res.json(err))
    }
}