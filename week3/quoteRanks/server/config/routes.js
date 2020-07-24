const Authors = require('../controllers/authors')

module.exports = function(app){

    app.get('/', (req,res)=>{

    })

    app.get('/authors', (req,res) => {
        Authors.index(req,res)
    })

    app.get('/new', (req,res) =>{
    })

    app.post('/new/author', (req,res) =>{
        Authors.create(req,res)
    })

    app.delete('/authors/:id', (req,res) => {
        Authors.delete(req,res)
    })

    app.get('/edit/:id', (req,res) => {
        Authors.show(req,res)
    })

    app.post('/edit/:id', (req,res) =>{
        Authors.update(req,res)
    })
}