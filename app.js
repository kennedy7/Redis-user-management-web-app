const express = require ('express');
const exphbs = require('express-handlebars');
const ejs = require('ejs');
const path = require ('path');
const bodyParser = require ('body-parser');
const methodOverride = require ('method-override');
const app = express();
const port = process.env.PORT || 3000;
const { router } = require ('./route');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.urlencoded({
    extended: false
  }));

//view engine
app.set("view engine", "ejs");
 
//methodOverride
app.use(methodOverride('_method')) 
app.use(router)

app.listen(port, ()=>{
    console.log(`app running on port ${port}`)
})