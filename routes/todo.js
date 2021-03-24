//  create our new router
const router = require('express').Router()
const TodoController = require('../controllers/todo')

//////////////////////////////////
// Router Specific Middleware
//////////////////////////////////

//////////////////////////////////
// Router Specific Routes
//////////////////////////////////

// index route get request to '/todos'
router.get("/", TodoController.index)

// new todo page
router.get('/new', TodoController.new)

// post request to create a new To Do
router.post('/', TodoController.create)

// delete request to delete a new todo
router.delete("/:id", TodoController.destroy)

//////////////////////////////////
// Export the router
//////////////////////////////////
module.exports = router