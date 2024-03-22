const express = require('express')
require('dotenv').config();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const app = express()
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.js')
const postRoutes = require('./routes/posts.js')
const cors = require('cors');

app.use(express.json())
app.use(cors());
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})

app.use('/api/posts', postRoutes)
app.use('/api/user', userRoutes)

mongoose.connect(MONGO_URI)
    .then(()=>{
        app.listen(PORT,()=>{
            console.log("listening of port",PORT);
        })
    })
    .catch((err)=>{
        console.log(err);
    })
