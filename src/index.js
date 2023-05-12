const path = require('path')
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes')
//HTTP logger
app.use(morgan('combined'));


//static cấu hình cho đường dẫn file tĩnh
app.use(express.static(path.join(__dirname,'public')))

//template engine
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'resources/views'))


//Route
route(app)


//router
// app.get('/', (req, res) => {
//    res.render('home')  //render theo file home handlerbar
// })

// app.get('/news', (req, res) => {
//   res.render('news')  //render theo file home handlerbar
// })

// app.get('/table', (req, res) => {
//   res.render('table')  //render theo file home handlerbar
// })

// // query theo url
// app.get('./search',(res,req) => {
//   console.log(req.query.q);
//   res.render('search')
// })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})


