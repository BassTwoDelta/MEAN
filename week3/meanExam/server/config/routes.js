const Restaraunts = require("../controllers/restaurants")

module.exports = function(app){

    app.get("/", (req,res) => {

    })
    app.get("/restaurants", (req,res) =>{
        Restaraunts.index(req,res)
    })

    app.post('/restaurants/new', (req,res) => {
        Restaraunts.create(req,res)
    })

    app.get('/restaurants/:id', (req,res)=>{
        Restaraunts.reviews(req,res)
    })

    app.post('/restaurants/:id/review', (req,res)=>{
        Restaraunts.createReview(req,res)
    })

    app.delete('/restaurants/:id/delete', (req,res)=>{
        Restaraunts.destroy(req,res)
    })

    app.get('/restaurants/:id/edit', (req,res) => {
        Restaraunts.show(req,res)
    })

    app.put(`/restaurants/:id`, (req,res) => {
        Restaraunts.update(req,res)
    })


}