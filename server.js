const express = require('express')
const mongoose = require('mongoose')
const Run = require('./model/countModel')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes

app.get('/', (req, res) => {
    res.send('Hello NODE API')
})


app.get('/runs', async(req, res) => {
    try {
        const runs = await Run.find({});
        res.status(200).json(runs);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


app.post('/runs', async(req, res) => {
    try {
        const run = await Run.create(req.body)
        res.status(200).json(run);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})
console.log('what is this')
mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://tanishq1357:chochubaba@firstone.gvgqox8.mongodb.net/?retryWrites=true&w=majority&appName=FirstOne').then(()=> {
    console.log('i have the database connected right now');
    app.listen(3000, ()=> {
        console.log('server is running'
        );
    });
}).catch((error)=> { console.log(error)});

