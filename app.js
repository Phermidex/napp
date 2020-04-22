const express = require('express');
const app = express();
const tn = require('nunjucks');
const body_parser = require('body-parser');
const morgan = require('morgan');
//const mongodb = require('./public/config/mongodb.js');
//app navigation
const indexRouter = require('./public/routes/index');
// settings
require('dotenv').config();
app.use(express.static(__dirname + '/public/assets/'));
//app.use(express.static('public'));
//app.use(express.Router());
app.use(body_parser.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(morgan('dev'));

/*app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});*/

// avance settings
var env = tn.configure(['public/views/'], {
  autoescape: true,
  express: app
});
//set filters
env.addFilter('myFilter', function (obj, arg1, arg2) {
  console.log('myFilter', obj, arg1, arg2);
  // Do smth with obj
  return obj;
});
//set globals functions
env.addGlobal('myFunc', function (obj, arg1) {
  console.log('myFunc', obj, arg1);
  // Do smth with obj
  return obj;
});
/*mongodb.once('open', () => {
  console.log('Db mongo is connected');
});*/

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//routes
app.get('*', indexRouter, (req, res) => {
  const configuration_config = {
    title: '404 page not found',
    base_url: process.env.BASE_URL
};
  res.status(404).render('404.html', configuration_config);
});

/*app.get('/users/:username/:password', indexRouter);
app.get('/profile/:id', indexRouter);*/

app.post('*', indexRouter, (req, res) => {
  const configuration_config = {
    title: '404 page not found',
    base_url: process.env.BASE_URL
};
  res.status(404).render('404.html', configuration_config);
});
/*app.get('/config', indexRouter);
app.get('/datos', indexRouter);
app.get('/datos/:title', indexRouter);
app.get('/new', indexRouter);
app.post('/datos/create/', indexRouter);*/
//main run
async function main() {
  await app.listen(process.env.PORT, function () {
    console.log('started...now and listen ' + process.env.PORT);
  });
}
//run
main();