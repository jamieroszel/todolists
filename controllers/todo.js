////////////////////////
// Import Models
////////////////////////
const List = require("../models/List")
const Todo = require("../models/Todo")
///////////////////////////
// Controller Functions
///////////////////////////
// index controller = get all todos
const index = async (req, res) => {
    res.render("todo/index")
}
//////////////////////////////
// Export Controller
//////////////////////////////
module.exports = {
    index
}