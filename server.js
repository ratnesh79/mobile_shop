const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const hbs = require('hbs');
const Register = require('./src/models/Schema');
const Contact=require("./src/models/contact");
const public_path = path.join(__dirname, "./public");
// console.log(public_path);
const template_path = path.join(__dirname, "./templates/views");
const partials_path = path.join(__dirname, "./templates/partials");
// console.log(path.join(__dirname,"./templates/views"));

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(public_path))
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);
require('./src/db/conn');



app.get("/", (req, res) => {
    res.render("index")

})
app.get("/login", (req, res) => {
    res.render("login")

})
app.post("/login", async (req, res) => {
    try {
        const email = req.body.email;
        // const password=req.body.pswd;
        const login_data = await Register.findOne({ email: email })
        console.log(login_data.name);
        const pswd = req.body.pswd;
        if (login_data.password === pswd) {
        
            res.render("index",{
                user_name:login_data.name
            })
        } else {
            res.send("passward not match")
        }
    } catch (error) {
        res.send("user not find")
    }
})
app.post("/signup", async (req, res) => {
    try {
        const name=req.body.txt
        const email = req.body.email;
        const pswd = req.body.pswd;
              const data = new Register({
                name: req.body.txt,
                email: req.body.email,
                password: req.body.pswd

            })
        const Registered = await data.save();
            res.status(201).render("index",{
                user_name:name
            });
    } catch (error) {
        res.status(400).send("failed");
        console.log(error);
    }
})

app.get("/contact",(req,res)=>{
    res.render("contact")
})
app.post("/contact",async(req,res)=>{
    try {
        const name=req.body.name;
        const email=req.body.email;
        const number=req.body.contact;
        const message=req.body.message;
           
        const ContactDetails=new Contact({
            name:name,
            email:email,
            number:number,
            message:message
        })
        const data=await ContactDetails.save();
        res.render("index");
    } catch (error) {
        res.status(400).send("message not send");
    }
   
})
app.get("/signup",(req,res)=>{
    res.render("signup");
})

const port = process.env.PORT||1000;
app.listen(port, () => {
    console.log(`server is running at port : ${port}`);
})