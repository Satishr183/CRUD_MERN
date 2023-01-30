const mongoose = require("mongoose");

const greenSchema = new mongoose.Schema(
    {
    title:{
        type:String,
        enum:["veggies","fruits"],
        default:"veggies"
    },
    name:{
        type:String
    },
    price:{
        type:Number
    }
}   
,{timestamps:true})

module.exports =  mongoose.model("Green",greenSchema)