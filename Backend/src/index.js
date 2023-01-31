const express=require("express")
const mongoose=require("mongoose")
const cors = require('cors')
const route = require('./routes/route')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

mongoose.connect("mongodb+srv://Satishr183:6SdvyY7phCfH5VsV@cluster0.ewmx8.mongodb.net/Test183-DB",{useNewUrlParser:true})
.then(()=>{
    console.log("MongoDB Connected")
}).catch((err)=>{
    console.log(err.message);
})

app.use(cors())
app.use('/', route)


app.listen(5000,function(){
    console.log("Server listen on PORT : ",5000)
})