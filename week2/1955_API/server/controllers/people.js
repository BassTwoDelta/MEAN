const {Person} = require('../models/person')

module.exports = {

    index: function(req,res){
        people = Person.find()
            .then(people => res.json(people))
            .catch(err => res.json(err))
    },

    named: function(req,res){
        person = Person.findOne({name: req.params.name})
            .then(person => res.json(person))
            .catch(err => res.json(err))
    },

    create: function(req,res){
        person = new Person();
        person.name = req.params.name
        person.save()
            .then(person => res.json(person))
            .catch(err => res.json(err))
    },

    delete: function(req,res){
        person = Person.findOne({name: req.params.name})
        person.remove()
            .then(() => res.json())
            .catch(err => res.json(err))
    }
}