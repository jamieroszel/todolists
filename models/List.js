// Destructure Schema and model from our connection
const {Schema, model} =require('../db/connection')

/////////////////////
// Define our schema
/////////////////////
const ListSchema = new Schema({
    name: {type: String, required: true},
    todos:[{type: Schema.Types.ObjectId, ref: "Todo"}]
})

///////////////////
// Define our model
///////////////////
const List = model('List', ListSchema)

///////////////////
// Export our model
///////////////////
module.exports = List