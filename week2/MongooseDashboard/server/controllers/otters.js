const {Otter} = require('../models/otter')

module.exports = {

    index: function(req,res){
        otters = Otter.find()
        .then(data => {
            res.render('index', {otters: data})
        })
    },

    new: function(req,res){
        res.render("newOtter");
    },

    show: function(req,res){
        otter = Otter.findById(req.params.id)
        .then(data => {
            res.render("otter", {otter:data})
        })
    },

    edit: function(req,res){
        otter = Otter.findById(req.params.id)
        .then(data => {
            res.render("editOtter", {otter:data})
        })
    },

    destroy: function(req,res){
        otter = Otter.findById(req.params.id)
        otter.remove()
        .then(data => {
            res.redirect("/")
        })
    },

    create: function(req,res){
        const otter = new Otter();
        otter.name = req.body.name
        otter.age = req.body.age
        otter.location = req.body.location
        otter.description = req.body.description
        otter.save()
        .then(data => {
            res.redirect("/")
        })
        .catch(err => {
            console.log("err:", err)
            for (var key in err.errors) {
                req.flash('registration', err.errors[key].message);
            }
            res.redirect("/otters/new")
        })
    },

    update: function(req,res){
        otter = Otter.findById(req.params.id)
        otter.update({name: req.body.name, age: req.body.age, location: req.body.location, description: req.body.description})
        .then(data => {
            res.redirect(`/otters/${req.params.id}`)
        })
        .catch(err => {
            console.log("err:", err)
            for (var key in err.errors) {
                req.flash('registration', err.errors[key].message);
            }
            res.redirect(`/otters/edit/${req.params.id}`)
        })
    }
}