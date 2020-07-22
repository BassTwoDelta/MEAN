const Tasks = require('../controllers/tasks')

module.exports = function(app){

    app.get('/tasks', (req,res) =>{
        Tasks.index(req,res)
    });

    app.get('/task/:id', (req,res) => {
        Tasks.show(req,res)
    });

    app.post('/new/task', (req, res)=>{
        Tasks.create(req,res)
    });

    app.put('/update/:id', (req,res)=>{
        Tasks.update(req,res)
    });

    app.delete('/delete/:id', (req,res)=>{
        Tasks.destroy(req,res)
    });
}