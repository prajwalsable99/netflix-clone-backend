const express=require('express');
const router=express.Router();
const User= require('../models/UserModel')

router.post('/',async(req,res)=>{
    

    

    try {
        let user = await User.findOne({ useremail: req.body.useremail });
            if (user) {
                const {movieslist}=user;
                
                user.update()
                // console.log(user._id);

                const curr_movie_id =req.body.movie.id;
               
                // console.log(curr_movie_id);
                let already=0;
                for (let index = 0; index < movieslist.length; index++) {
                    const {id} = movieslist[index];
                    // console.log(movie_id)
                    if(id===curr_movie_id){
                        already=1;
                        break;
                    }
                    
                }
                // console.log("already :",already)

                if(already===1){
                    res.json({"message":"movie already into list"})

                }else{

                    await User.findByIdAndUpdate(
                            user._id,
                            {
                                    movieslist: [...user.movieslist, req.body.movie],
                                },
                                { new: true }
                              );
                            
                              res.json({"message":"movie added into list"})
                }
                        }
            else{
                user = await User.create({

                    
                    useremail: req.body.useremail,
                    movieslist:[req.body.movie]
                })
                res.json({"message":"movie added into  new list"})
            }

    } catch (error) {
        res.json({"message":"some error adding movies"})
    }
    

    


});

module.exports=router;