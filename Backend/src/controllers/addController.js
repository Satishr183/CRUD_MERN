const postModel = require('../models/postModel')

const addPost = async function(req,res){
   try {
    const reqBody = req.body

    const createPost = await postModel.create(reqBody)
    res.status(201).send({status:true,data:createPost})
    
   } catch (error) {
    res.status(500).send({status:false,message:error.message})
   }
}

const getPost = async function(req,res){
    try {
 
     const getAllPost = await postModel.find()
     res.status(200).send({status:true,data:getAllPost})
     
    } catch (error) {
     res.status(500).send({status:false,message:error.message})
    }
 }

const deletePost = async function(req,res){
   try {
       postModel.findByIdAndDelete({_id:req.params.id}).then(doc=>console.log(doc))
     
      
      
   } catch (error) {
      res.status(500).send({status:false,message:error.message})
   }
}

const updatePost= async function(req,res){
try {
   
   const updatedPost= await postModel.findByIdAndUpdate({_id:req.params.id},{title:req.body.title,description:req.body.description},{new:true})
   res.status(200).send({status:true, message:"updated"})

} catch (error) {
   res.status(500).send({status:false, message:error.message})
}
}


module.exports={addPost,getPost,deletePost,updatePost}