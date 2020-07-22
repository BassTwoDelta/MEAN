const Cakes = require("../controllers/cakes")

module.exports = function(app){
    
    app.get('/', (req,res) => {
    });

    app.get('/cakes', (req,res) => {
        Cakes.index(req,res)
    })

    app.post('/new/cake', (req,res) => {
        Cakes.create(req,res)
    })

    app.get('/cakes/:id', (req,res) => {
        Cakes.show(req,res)
    })

    app.post('/cakes/comment/:id', (req,res) =>{
        Cakes.createRaC(req,res)
    })
}