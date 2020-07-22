module.exports = {
    index: function(req,res){
    },

    tasks: function(req,res){
        res.json([{name:"sweep"}, {name:"mop"}, {name:"laundry"}])
    },

    title: function(req,res){
        console.log('title service recived', req.body.title)
        res.json({message:"thanks"})
    }
}