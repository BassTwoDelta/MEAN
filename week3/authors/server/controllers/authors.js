const {Author} = require('../models/author')

module.exports = {
    
    index: function(req,res){
        Author.find()
            .then(author => res.json(author))
            .catch(err => res.json(err))
    },

    create: function(req,res){
        author = new Author();
        author.name= req.body.name
        author.save()
            .then(cake => res.json(cake))
            .catch(err => res.json(err))
    },

    delete: function(req,res){
        author = Author.findById(req.params.id)
        console.log(author)
        author.remove()
            .then(author => res.json(author))
            .catch(err => res.json(err))
    },

    show: function(req,res){
        Author.findById(req.params.id)
            .then(author => res.json(author))
            .catch(err => res.json(err))
    },

    update: function(req,res){
        author = Author.findById(req.params.id)
            .then(author =>{
                author.name = req.body.name
                author.save()
                    .then(() => res.json(author))
                    .catch(err => res.json(err))
            })
            .catch(err => res.json(err))
    }

}