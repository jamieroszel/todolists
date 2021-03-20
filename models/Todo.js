// Destructure Schema and model from our connected mongoose
const {Schema, model} = require('../db/connection')

///////////////////////////////////
// DEFINE OUR SCHEMA
///////////////////////////////////

const TodoSchema = new Schema({
    subject: {type: String, required: true},
    list: {type: Schema.Types.ObjectId, ref: 'List', required: true},
})

///////////////////////////////////
// DEFINE OUR MODEL
///////////////////////////////////

const Todo = model('Todo', TodoSchema)

///////////////////////////////////
// EXPORT OUR MODEL
///////////////////////////////////

module.exports = Todo