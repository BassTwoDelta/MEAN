const Bikes = require("../controllers/bikes")

module.exports = function(app){
    
    app.get('/', (req,res) => {
    });

    app.get('/browse', (req,res) => {
        Bikes.index(req,res);
    })

    app.delete('/delete/:id', (req, res) =>{
        Bikes.destroy(req,res);
    })

}