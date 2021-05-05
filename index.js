//Imports
const express = require('express');
const app = express(); //instance of the app


//home route
app.get('/', function(req, res) {
    //in here you can access a database
    //or make some logic
    //or access an API
    //send a response at the end
    res.send('Hello World');
});

app.get('/sei', (req, res) => {
    res.send('SEI 412');
});

//when we are in an environment, we may not have control over the port we use, 
//this will allow us to use what we are given, and fallback to 8000 if one is not given
const PORT = process.env.PORT || 8000;

app.listen(8000, () => {
    console.log('Server is listening on ${PORT}');
});