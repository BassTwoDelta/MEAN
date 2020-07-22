const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
    name: {type: String, required: true}
    }, {timestamps: true})

const Person = new mongoose.model("Person", PersonSchema)

module.exports = {
    Person: Person,
    PersonSchema: PersonSchema,
}