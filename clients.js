const express = require('express');
const mongoose = require('mongoose');
const hereRoute = require('./routes/here');
const thereRoute = require('./routes/there');
const clientsOptionsRoute = require('./routes/clientsOptions');
const dbUri = require('./db/dbConfig')
const clients = express();


const port = 3000 

//mongoose connection
mongoose.connect(dbUri.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database sucessfully connected')
}, err => console.log("Database could not conncted" + err))


//routes 

clients.use('/api',hereRoute,thereRoute,clientsOptionsRoute)

clients.listen(port , ()=>console.log(`app is up and running at port: ${port}`));
