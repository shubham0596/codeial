const express=require ('express');
const app=express();
const port=8000;
const cookieParser=require('cookie-parser');
const expressLayouts=require('express-ejs-layouts');
app.use(expressLayouts);
app.use(express.urlencoded());
app.locals.moment = require('moment');
app.use(cookieParser());
//const Contact=require('./models/task');
const db=require('./config/mongoose')
app.use(express.static('./assests'));
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.use('/',require('./routes'));
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
if(err){
    console.log(`error is showing: ${err}`)
}
console.log("server is running on port number",port)
});
//djhrifjiefhg