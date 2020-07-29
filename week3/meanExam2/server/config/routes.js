const Products = require('../controllers/products')

module.exports = function(app){

    app.get('/', (req,res) => {

    })

    app.get('/products', (req,res)=> {
        Products.index(req,res)

    })

    app.post('/products/new', (req,res)=> {
        Products.create(req,res)
    })

    app.get('/products/:id', (req,res)=>{
        Products.show(req,res)
    })

    app.delete('/products/:id/delete', (req,res)=> {
        Products.destroy(req,res)
    })

    app.get('/products/:id/edit', (req,res)=>{
        Products.show(req,res)
    })

    app.put('/products/:id/edit', (req,res)=>{
        Products.update(req,res)
    })
}