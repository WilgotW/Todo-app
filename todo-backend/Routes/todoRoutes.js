const router = require("express").Router();
const Todo = require("../model/Todo");
const verify = require("./verifyToken");

router.post("/getAll", verify , async (req, res) => {
    const todos = await Todo.find({token: req.body.token});
    return res.json(todos)
});

router.post("/add", verify, async (req, res) => {
    const todo = new Todo({
        description: req.body.description,
        token: req.body.token
    });
    try{
        const savedTodo = await todo.save();
        res.send(savedTodo);
    }catch(err){
        res.status(400).send(err);
    }
});

router.delete("/remove/:id", verify, async (req, res) => {
    const todoToRemove = await Todo.findOne({_id: req.params.id});
    if(!todoToRemove) return res.status(404).send("Todo doesnt exist in database");
    todoToRemove.delete();
    res.send("deleted todo");
});

router.put("/update/:id", verify, async (req, res) => {
    try{
        const todoToChange = await Todo.findOne({_id: req.params.id});
        const updatedTodo = await Todo.findOneAndUpdate({_id: req.params.id}, {description: req.body.description});
        res.send(`updated todo  ${req.params.id} to: ${req.body.description}`);
    }catch(err){
        res.status(400).send(err);
    }
});

module.exports = router;