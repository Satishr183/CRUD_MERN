const express = require("express");
const router = express.Router();
const {addGreen,getGreen} = require("../controllers/addController")

router.get("/api-test",function(req,res){
    console.log(req);
    res.json({"name":"satish"})
})

router.post("/api/createGreen",addGreen)
router.get("/api/getAllGreen",getGreen)



module.exports = router