const express = require('express');
const ejs = require('ejs');
const path = require('path');
const session = require("express-session");
const flash = require("express-flash");
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const port = process.env.PORT || 3000;
const {router} = require('./route');

//view engine
app.set("view engine", "ejs");

app.use(express.urlencoded({
  extended: true
}));
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(express.json())


app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
  })
)


app.use(flash())

//methodOverride
app.use(methodOverride('_method'))
app.use(router)



app.listen(port, () => {
  console.log(`app running on port ${port}`)
})