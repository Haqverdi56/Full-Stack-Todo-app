const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const todoRouter = require('./routes/todoRoutes')

app.use(express.json());
app.use(express.urlencoded());
app.use(cors())
const port = process.env.PORT || 5000

require("dotenv").config();

mongoose.connect(process.env.SECRET_KEY)
.then(res=>{
    console.log("Connect");
})
.catch(err => {
    console.log("err", err);
})


app.use('/todos', todoRouter);
app.use('/', function(req, res) {
    res.send("Welcome Todo App")
})


app.listen(port,()=>{
    console.log("Server running...");
})