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

//////////////////////////////////
// Export the router
//////////////////////////////////
module.exports = router