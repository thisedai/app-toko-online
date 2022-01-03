// module
const express = require('express');
const expressLayout = require('express-ejs-layouts');

// config app
const app = express();
const port = 3000;

// config module
app.set('view engine', 'ejs');
app.use(expressLayout);
app.use(express.static('public'));

app.get('/', (req, res) => {
  const data = {
    layout: 'layouts/main',
    title: 'Home',
  };
  res.render('index', data);
});

app.listen(port);
