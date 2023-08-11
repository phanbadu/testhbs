const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');

// HTTP LOGER:
app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/huyen', (req, res) => {
  res.render('huyen');
});

app.use(express.static(path.join(__dirname, 'public')));

// TEMPLATE ENGINE
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
})); 
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});