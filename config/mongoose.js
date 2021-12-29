const mongoose=require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/express_db';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
//mongoose.connect('mongodb://localhost/codeial_development');
const db=mongoose.connection;
db.on('error',console.error.bind(console,"Error connecting to mongodb"));
db.once('open',function(){
    console.log('coonected to database:: mongodb');
});
module.exports=db;