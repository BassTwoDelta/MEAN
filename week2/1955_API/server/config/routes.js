const People= require('../controllers/people')

module.exports = function(app){

    app.get('/', (req,res)=> {
        People.index(req,res)
    });

    app.get('/:name/', (req,res) =>{
        People.named(req,res)
    });

    app.get('/new/:name', (req,res) => {
        People.create(req,res)
    });

    app.get('/remove/:name', (req,res) => {
        People.delete(req,res)
    })
}