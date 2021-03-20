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

    const lists = await List.find({}).populate('todos')
    res.render("todo/index", {lists})
}

// New Todo Page
const newTodo = async (req, res) => {
    const lists = await List.find({});

    res.render('todo/new', {lists});
}
//////////////////////////////
// Export Controller
//////////////////////////////
module.exports = {
    index,
    new: newTodo,
};