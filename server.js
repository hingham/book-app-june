'use strict';

const express = require('express');
const superagent = require('superagent');
const cors = require('cors');
const dotenv = require('dotenv').config();

// set up application
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;


// Application Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

// Set the view engine for server-side templating
app.set('view engine', 'ejs');


app.get('/hello', (req, res)=>{
    res.send('hello');
})

app.get('/', search);

app.get('/new-search', newSearch);

function newSearch(req, res){
    res.render('pages/searches/show');
}

function search (req, res){
    res.render('pages/index');
}



app.listen(PORT, ()=> console.log(`App is listening on port ${PORT}`));

