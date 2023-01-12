const express=require('express');
const router=express.Router();
const User= require('../models/UserModel')

router.post('/',async (req,res)=>{

    try {
        let user = await User.findOne({ useremail: req.body.useremail });
            if (user){

                const {movieslist}=user;
                res.json({"likedmovies":movieslist})


            }else{

                res.json({message:"You dont have any movies in the list."})
            }
    } catch (error) {
        res.json({"message":"some error adding movies"})
    }

});

module.exports=router;