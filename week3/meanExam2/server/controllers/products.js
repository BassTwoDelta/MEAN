const {Product} = require('../models/product')

module.exports = {
    index: function(req,res){
        Product.find()
        .then(product => res.json(product))
        .catch(err => res.json(err))
    },

    create: function(req,res){
        product = new Product();
        product.name = req.body.name;
        product.qty = req.body.qty;
        product.price = req.body.price;
        product.save()
            .then(product => res.json(product))
            .catch(err => res.json(err))
    },

    show: function(req,res){
        Product.findById(req.params.id)
            .then(product => res.json(product))
            .catch(err => res.json(err))
    },

    destroy: function(req,res){
        product = Product.findById(req.params.id)
        product.deleteOne()
            .then(product => res.json(product))
            .catch(err => res.json(err))
    },

    update: function(req,res){
        product = Product.findById(req.params.id)
            .then(product =>{
                product.name = req.body.name
                product.qty = req.body.qty
                product.price = req.body.price
                product.save()
                    .then(product => res.json(product))
                    .catch(err => res.json(err))
            })
            .catch(err => res.json(err))
    }
}