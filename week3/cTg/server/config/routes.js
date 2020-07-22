const Cats = require("../controllers/cats")

module.exports = function(app){
    app.get('/', (req,res) => {
        // replace with nothing once angular app built
        // res.json('success')
    })

    app.get('/second', (req,res)=>{
        Cats.index(req,res)
    })
}