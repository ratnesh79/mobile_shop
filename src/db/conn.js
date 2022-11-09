const mongoose=require("mongoose");
const DB="mongodb+srv://ratnesh:ratneshagrahari17@cluster0.83hz7n2.mongodb.net/Client?retryWrites=true&w=majority";
mongoose.connect(DB).then(()=>{
    console.log("database connected")
}).catch((err)=>{
    console.log(err);
})