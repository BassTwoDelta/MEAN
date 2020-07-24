const {Note} = require('../models/note')

module.exports = {
    index: function(req,res){
        Note.find().sort({createdAt: -1})
            .then(cake => res.json(cake))
            .catch(err => res.json(err))
    },

    create: function(req,res){
        note = new Note()
        note.note = req.body.note
        note.save()
            .then(cake => res.json(cake))
            .catch(err => res.json(err))
    }

}