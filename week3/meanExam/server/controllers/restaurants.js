const {Restaurant} = require("../models/restaurant")
const {Review} = require('../models/restaurant')

module.exports = {
    index: function(req,res){
        Restaurant.find()
            .then(restaurant => res.json(restaurant))
            .catch(err => res.json(err))
    },

    create: function(req, res){
        restaurant = new Restaurant();
        restaurant.name = req.body.name
        restaurant.cuisine = req.body.cuisine
        restaurant.save()
            .then(restaurant => res.json(restaurant))
            .catch(err => res.json(err))
    },

    reviews: function(req,res){
        restaurant = Restaurant.findById(req.params.id)
            .then(restaurant => {res.json(restaurant)})
            .catch(err => res.json(err))
    },

    createReview: function(req,res){
        review = new Review()
        review.customer_name = req.body.customer_name
        review.stars = req.body.stars
        review.review = req.body.review
        review.save()
            .then(review => {
                Restaurant.update({_id: req.params.id}, {$push:{reviews:review}})
                    .then(data => {
                        console.log("added", data)
                        res.json(data)
                    })
                    .catch(err => res.json(err))
            })
            .catch(err => res.json(err))
    },

    destroy: function(req,res){
        restaurant = Restaurant.findById(req.params.id)
        restaurant.deleteOne()
            .then(restaurant => res.json(restaurant))
            .catch(err => res.json(err))
    },

    show: function(req,res){
        Restaurant.findById(req.params.id)
            .then(restaurant => {res.json(restaurant)})
            .catch(err => res.json(err))
    },

    update: function(req,res){
        restaurant = Restaurant.findById(req.params.id)
            .then(restaurant => {
                restaurant.name = req.body.name
                restaurant.cuisine = req.body.cuisine
                restaurant.save()
                    .then(restaurant => {
                        res.json(restaurant)
                    })
                    .catch(err => res.json(err))
            })
            .catch(err => res.json(err))
        
    }
}