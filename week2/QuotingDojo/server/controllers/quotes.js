const {Quote} = require('../models/quote')

module.exports = {
    index: function(req,res){
        res.render("index");
    },
    create: function(req,res){
        const quote = new Quote();
        quote.name = req.body.name
        quote.quote = req.body.quote
        quote.save()
        .then(data => {
            res.redirect("quotes")
        })
        .catch(err => {
            console.log("err:", err)
            for (var key in err.errors) {
                req.flash('messages', err.errors[key].message);
            }
            res.redirect("/")
        })
    },

    display: function(req,res){
        quotes = Quote.find().sort({createdAt: -1})
        .then(data => {
            res.render("quotes", {quotes: data})
        })
    }
}