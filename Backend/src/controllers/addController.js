const greenModel = require('../models/greenModel')

const addGreen = async function(req,res){
   try {
    const reqBody = req.body

    const createGreen = await greenModel.create(reqBody)
    res.status(201).send({status:true,data:createGreen})
    
   } catch (error) {
    res.status(500).send({status:false,message:error.message})
   }
}

const getGreen = async function(req,res){
    try {
 
     const getAllGreen = await greenModel.find()
     res.status(200).send({status:true,data:getAllGreen})
     
    } catch (error) {
     res.status(500).send({status:false,message:error.message})
    }
 }

module.exports={addGreen,getGreen}