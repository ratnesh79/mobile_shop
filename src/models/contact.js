const mongoose=require('mongoose');

const Contact_info=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
  


})

//we need to  collection
const Contact=new mongoose.model("ContactDetails",Contact_info);

module.exports=Contact;