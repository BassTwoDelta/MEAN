const Notes = require("../controllers/notes")

module.exports = function(app){

    app.get('/', (req,res) => {
    });

    app.get('/notes', (req,res) => {
        Notes.index(req,res)
    })

    app.post('/notes/add', (req,res)=> {
        Notes.create(req,res)
    })
}