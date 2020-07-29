const {Bike} = require('../models/bike')

module.exports = {

    index: function(req,res){
        Bike.find()
            .then(bike => res.json(bike))
            .catch(err => res.json(err))
    },

    destroy: function(req,res){
        bike = Bike.findById(req.params.id)
        bike.remove()
            .then(bike => res.json(bike))
            .catch(err => res.json(err))
    }
}