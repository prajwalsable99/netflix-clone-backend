const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const DB_URI="mongodb://localhost:27017/netflix?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const ConnectToMongo=async()=>{
        await mongoose.connect(DB_URI,()=>{

            console.log("Connected to database successfully")
        })

}

module.exports=ConnectToMongo;