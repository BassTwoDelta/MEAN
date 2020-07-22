const Otters = require('../controllers/otters')

module.exports = function(app){
    app.get("/", (req,res) => {
        Otters.index(req,res)
    });

    app.get("/otters/new", (req, res) => {
        Otters.new(req,res)
    });

    app.get("/otters/:id", (req, res) => {
        Otters.show(req,res);
    });

    app.get("/otters/edit/:id",(req, res)=>{
        Otters.edit(req,res)
    });

    app.post("/otters/delete/:id", (req, res)=> {
        Otters.destroy(req,res)
    });

    app.post("/otters", (req, res) => {
        Otters.create(req,res)
    });

    app.post("/otters/update/:id", (req, res)=> {
        Otters.update(req,res)
    });
}