const mongoose = require("mongoose");

const OtterSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    location : {type: String, required: true},
    description : {type: String, required: false}
})

const Otter = new mongoose.model("Otter", OtterSchema)

module.exports = {
    Otter: Otter,
    QtterSchema: OtterSchema,
}