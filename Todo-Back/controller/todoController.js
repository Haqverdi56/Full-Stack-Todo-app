const { todoModel } = require('../models/Todo');

const todoController = {
    getAll: async(req, res) => {
        data = await todoModel.find({isDeleted:false})
        res.json(data)
    },
    getById: (req, res) => {
        let id = req.params.id;
        todoModel.findById(id,(err,docs)=>{
            if(!err){
                res.json(docs)
            }else{
                (res.status(500).json(err))
            }
        })
    },
    add: (req, res) => {
        console.log(req.body);
        let newTodo = new todoModel({
            title: req.body.title
        })
        newTodo.save(function(err,docs){
            if(!err){
                res.json(docs)
            }else{
                (res.status(500).json(err))
            }
        })
    },
    delete: (req, res) => {
        let id = req.params.id;
        todoModel.findById(id,(err,docs)=>{
            if(!err){
                docs.isDeleted = true;
                docs.save()
                res.json({message:"success"})
            }else{
                (res.status(500).json(err))
            }
        })
    },
    update: (req,res) => {
        const id = req.params.id;
        console.log(req.body);
        todoModel.findByIdAndUpdate(id, {title:req.body.title, runValidators:true}, (err, docs) => {
            if(!err){
                res.json(docs)
                docs.save()
            }else{
                res.status(500).json(err)
            }
        })
    },
}

module.exports = {
    todoController
}