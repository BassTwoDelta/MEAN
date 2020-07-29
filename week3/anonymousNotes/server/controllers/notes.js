const {Note} = require('../models/note')

module.exports = {
    index: function(req,res){
        Note.find().sort({createdAt: -1})
            .then(note => res.json(note))
            .catch(err => res.json(err))
    },

    create: function(req,res){
        note = new Note()
        note.note = req.body.note
        note.save()
            .then(note => res.json(note))
            .catch(err => res.json(err))
    }

}