const express = require('express');
const mongoose = require('mongoose');
const clients = require('./routes/clients');
const dbUri = require('./db/dbConfig');


const app = express();

//the port we are working on
const port = 3000

//to encode the data
app.use(express.json())

//mongoose connection
mongoose.connect(dbUri.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database sucessfully connected')
}, err => console.log("Database could not conncted" + err))


//routes 

app.use('/api',clients)

app.listen(port , ()=>console.log(`app is up and running at port: ${port}`));
