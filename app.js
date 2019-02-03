const express = require('express');
const app = express();
const cors = require('cors');
const indexRouter = require('./mvc/routes/routes');
const path=require('path')

app.disable('x-powered-by')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(cors())
app.use('/movies', indexRouter);


module.exports = app;
