const express=require ('express');
const app=express();
const port=8000;

app.use('/',require('./routes'));

app.listen(port,function(err){
if(err){
    console.log(`error is showing: ${err}`)
}
console.log("server is running on port number",port)
});
//djhrifjiefhg