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

// new Todo Page
const newTodo = async (req, res) => {
    // Retrieve List, so user can select which list to add todo to
    const lists = await List.find({})
    // render todo/new.ejs with the lists
    res.render('todo/new', {lists});
};

//////////////////////////////
// Export Controller
//////////////////////////////
module.exports = {
    index,
    new: newTodo,
};