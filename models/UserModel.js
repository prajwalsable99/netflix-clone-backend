const { mongoose } = require("mongoose");


const { Schema } = mongoose;

const UserSchema = new Schema({
  useremail: {
    type:String,
    required:true
  },
  movieslist:{
    type:Array,
    required:true
  }
  
 
});

module.exports=mongoose.model('user',UserSchema);