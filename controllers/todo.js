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

// new To Do Page
const create = async (req, res) => {
    // try block to catch any errors
    try {
        // get the target list
        const list = await List.findById(req.body.list);
        // replace list string with list id object
        req.body.list = list;
        // create the new To Do using the request body
        const todo = await Todo.create(req.body);
        // add the todo to lists todos array
        list.todos.push(todo)
        // save changes
        list.save()
        // recirect back to main todos page
        res.redirect('/todos';)
    } catch (error) {
        // send error as json if there is one
        res.json(error);
    }
};

//////////////////////////////
// Export Controller
//////////////////////////////
module.exports = {
    index,
    new: newTodo,
    create
};