const mongoose=require('mongoose');

const UserData=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }
  


})

//we need to  collection
const SignUp=new mongoose.model("ClientData",UserData);

module.exports=SignUp;