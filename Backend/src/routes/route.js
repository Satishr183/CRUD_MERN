const express = require("express");
const router = express.Router();
const {addPost,getPost,deletePost,updatePost} = require("../controllers/addController")

router.get("/api-test",function(req,res){
    console.log(req);
    res.json({"name":"satish"})
})

router.post("/api/createPost",addPost)
router.get("/api/getAllPost",getPost)
router.delete("/api/deletePost/:id",deletePost)
router.put("/api/updatePost/:id",updatePost)



module.exports = router