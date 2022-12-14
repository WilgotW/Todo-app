const router = require("express").Router();
const Todo = require("../model/Todo");

router.post("/add", async (req, res) => {
    const todo = new Todo({
        description: req.body.description
    });
    try{
        const savedTodo = await todo.save();
        res.send(savedTodo);
    }catch(err){
        res.status(400).send(err);
    }
});
router.delete("/remove/:id", async (req, res) => {
    const todoToRemove = await Todo.findOne({_id: req.params.id});
    if(!todoToRemove) return res.status(404).send("Todo doesnt exist in database");
    todoToRemove.delete();
    res.send("deleted todo");
});

router.put("/update/:id", async (req, res) => {
    const todoToChange = await Todo.findOne({_id: req.params.id});
    if(!todoToChange) return res.status(404).send("Todo doesnt exist in database");
    
    const updatedTodo = await Todo.findOneAndUpdate({_id: req.params.id}, {description: req.body.description});
    res.send(`updated todo  ${req.params.id} to: ${req.body.description}`);
});

module.exports = router;