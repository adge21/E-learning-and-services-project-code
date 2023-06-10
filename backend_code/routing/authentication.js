const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const authofuser = require('../middleware/authofuser');
const router = express.Router();
require('../database/mongoconnection')
const User = require('../schema/userSchema')
const courseContents = require('../schema/courseContent');
const courseProgressStatus = require('../schema/courseProgressStatus')





router.get('/',(req,res)=>{
    res.send("Hello from router");
});




router.post('/register', async (req,res)=>{

    const { firstname, lastname, email, password, confirm} = req.body;
   
    if(!firstname || !lastname || !email || !password || !confirm){ 
        return res.status(400).json({error:"Plz fill the fields properly" });
    }
    try{
   const userExist =  await User.findOne({email:email})
     if(userExist){
            return res.status(422).json({error:"user already exist" });
        }
        else if(password!=confirm)
        {
            return res.status(423).json({error:"password not matched" });
        }
        else{
        const user = new User({firstname, lastname, email, password, confirm});

        const userRegister = await user.save()
            if(userRegister)
            {
                res.status(201).json({message:"user registered successfuly"});
                
            }
            else{
                res.status(500).json({error:"failed to register"});
            }
        }
} catch(err) {
    console.log(err);
}
});





router.post('/signin', async (req,res)=>{
    let token;
    const { email, password} = req.body;
    if(!email ||!password)
    {
        res.status(400).send({error:"Please fill the data"})
    }
    else{try{

    const userLogin = await User.findOne({email:email})
    if(!userLogin){
        res.status(422).json({error:"Invalid Credentials"});
    }
    else{
        const isMatch = await bcrypt.compare(password, userLogin.password)
    if(!isMatch){
        res.status(422).json({error:"Invalid Password"});
    }
   else{
     token = await userLogin.generateAuthToken();
     res.cookie("jwttoken",token,{
        httpOnly:true
    })
    res.json({data:{"name":userLogin.firstname,"message":`Welcome back ${userLogin.firstname}`}});
}
}
 }catch(err){
    console.log(err);
 }
}
});








//     router.get('/myblogsdata',authofuser,async (req,res)=>{
//     res.status(200).send(req.rootUser);
// });






//     router.post('/blogsupload',authofuser,async (req,res)=>{
//     try{
//         const { blogtitle, blogcontent } = req.body;
//     if(!blogtitle || !blogcontent)
//     {
//         console.log("error in writing blog");
//         return res.status(400).json({ error: "plz write the blog correctly"});
//     }
//     else{
//     const userContact = await User.findOne({_id:req.userID})
//         const userBlog = await userContact.addMessage(blogtitle, blogcontent);
//         await userContact.save();
//         res.status(200).json({message:"Your Blog saved successfully"});
// }
// }catch(error){
//     console.log(error);
// }
// });


// router.get('/theblogs',async (req,res)=>{
//     req.change = await User.find()
//     res.status(200).send(req.change);
// });

router.get('/getCourseContent',authofuser,(req,res)=>{
    courseContents.findOne({ courseName: req.query.id }, (err, course) => {
        if (err) {
          res.send(err);
        } else {
          res.send(JSON.parse(course.courseContent));
        }
      });   
})

router.post('/courseProgress',(req,res)=>{
    if(req.body.progress==0)
    {
        const courseProgressState = new courseProgressStatus({
            emailId: req.body.emailId,
            courseName: req.body.courseName,
            progress: req.body.progress
        });
          
          courseProgressState.save((err, user) => {
            if (err) {
              res.send(err);
            } else {
              console.log(`Saved user progress as 0`);
            }
        });
    }
    else
    {
        courseProgressStatus.updateOne({ emailId: req.body.emailId,courseName:req.body.courseName,progress:0 }, { progress: req.body.progress}, (err, result) => {
            if (err) {
              res.send(err);
            } else {
              console.log(`Updated user progress as 1`);
            }
          });    
    }
    res.status(200).send("Updated course progress");
    
})

router.get('/getCourseProgress',(req,res)=>{
    courseProgressStatus.findOne({ emailId: req.query.emailId,courseName:req.query.courseName}, 'progress', (err, progress) => {
        if (err) {
          res.send(err);
        } else {
          res.send(progress);
        }
    });
})

router.get('/loggingout',authofuser,(req,res)=>{
    res.clearCookie('jwttoken',{path:'/'});
    res.status(200).send("user logout");
})
module.exports = router;