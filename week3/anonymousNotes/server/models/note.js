const mongoose = require("mongoose")

const NoteSchema = new mongoose.Schema({

    note: {
        type: String,
        minlength: [3, "Quote should be a minimum of 3 characters"]
    },
}, {timestamps: true})

const Note = new mongoose.model('Note', NoteSchema)

module.exports = {
    Note: Note, 
    NoteSchema: NoteSchema,
}