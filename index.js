const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const mongoose = require("mongoose");
const User = require("./models/loginData.js");




async function main(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/loginDetails");
        console.log("Connected");
    }
    catch(err){
        console.log(err);
    }
}

main().catch((err)=>{console.log(err)});

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));


//enter Data in dbs :

// let allUsers = [
//     {
//         email: "james@gmail.com",
//         password: "1234"
//     },
//     {
//         email: "harryu@gmail.com",
//         password: "112233"
//     },
//     {
//         email: "peter@gmail.com",
//         password: "12345"
//     },
//     {
//         email: "tony@gmail.com",
//         password: "54321"
//     }
// ];

// User.insertMany(allUsers);


//fill id pass using pass and send using get and post
app.get("/login",(req,res)=>{
    res.render("login-page.ejs");
})

//Parse data and check the entry is correct or not :

app.post("/login",async (req,res)=>{
    let {email, password} = req.body;

    try{
        let user = await User.findOne({email: email});

        if(user){
            if(user.password === password){
                res.redirect("/index.html");
            }else{
                res.send("incorect pass");
            }
        }else{
            res.send("No user");
        }
    }
    catch(err){
        console.log(err);
    };
    // console.log("working");
    // res.send("ok");
});



app.listen(port,()=>{
    console.log(`Listening at port : ${port}`);
});