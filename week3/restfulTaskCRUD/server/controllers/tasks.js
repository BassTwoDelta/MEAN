const {Task} = require('../models/task')

module.exports = {

    index: function(req,res){
        task = Task.find()
            .then(task => res.json(task))
            .catch(err => res.json(err))
    },

    show: function(req,res){
        task = Task.findById(req.params.id)
            .then(task => res.json(task))
            .catch(err => res.json(err))
    },

    create: function(req,res){
        task = new Task();
        task.title = req.body.title
        task.description = req.body.description
        task.save()
            .then(task => res.json(task))
            .catch(err => res.json(err))
    },

    update: function(req,res){
        task = Task.findById(req.params.id)
        task.update({title: req.body.title, description: req.body.description, completed: req.body.completed})
            .then(task => res.json(task))
            .catch(err => res.json(err))
    },

    destroy: function(req,res){
        task = Task.findById(req.params.id)
        task.remove()
            .then(() => res.json())
            .catch(err => res.json(err))
    },

}