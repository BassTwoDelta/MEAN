const {Cake} = require('../models/cake')
const {Comment} = require('../models/cake')

module.exports = {

    index: function(req,res){
        Cake.find()
            .then(cake => res.json(cake))
            .catch(err => res.json(err))
    },

    create: function(req,res){
        cake = new Cake();
        cake.baker = req.body.baker
        cake.image = req.body.image
        cake.save()
            .then(cake => res.json(cake))
            .catch(err => res.json(err))
    },

    show: function(req,res){
        Cake.findById(req.params.id)
            .then(cake => res.json(cake))
            .catch(err => res.json(err))
    },

    createRaC: function(req,res){
        console.log("HAYYYYYYY!@#!@$!@$!@$!@#$!@")
        comment = new Comment();
        comment.comment = req.body.comment;
        comment.rating = req.body.rating;
        comment.save()
            .then(comment => {
                Cake.update({_id: req.params.id},{$push:{comment:comment}})
                    .then(data => {console.log("got it", data)})
                    .catch(err => res.json(err))
            })
            .catch(err => res.json(err))
        
    }
}