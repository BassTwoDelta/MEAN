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
        task.title = req.params.title
        task.save()
            .then(task => res.json(task))
            .catch(err => res.json(err))
    },

    update: function(req,res){
        task = Task.findById(req.params.id)
        task.update({completed: req.params.completed})
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