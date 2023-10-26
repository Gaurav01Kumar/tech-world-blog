const mongoose=require("mongoose");
const { post } = require("../route/User");

// creating user schema 
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    post:[
        {
         title:{
            type:String,
         },
         postContent:{
            type:String,
         },
         like:{
            type:Number
         },
         dislike:{
            type:Number,
         },
         postDate:{
            type:String,
         }

        }
    ]
})
const User=new mongoose.model("users",userSchema);
module.exports=User;