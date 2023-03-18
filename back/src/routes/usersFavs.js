const express = require("express");
const favs = require("../utils/favs");
const favRouter = express.Router();

favRouter.post("/create",(req,res)=>{
    
    favs.push({...req.body})
    res.status(201).json({...req.body})
})

favRouter.get("/get",(req,res)=>{
    return res.status(200).json(favs);

})

favRouter.delete("/delete:id", (req,res)=>{
    const {id} = req.params;
    favs = favs.filter((e) => e.id != Number(id));
    return res.status(200).json(favs);

})


module.exports = favRouter;
