const express = require('express');
const app = express();
const port = 3000
const cors = require('cors');
const indexRouter = require('./mvc/routes/routes');

app.disable('x-powered-by')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//app.use(express.static(path.join(__dirname, 'public')));

app.use(cors())
app.use('/movies', indexRouter);
app.listen(port, ()=>console.log('foshizzlemybrizzle'))

module.exports = app;
