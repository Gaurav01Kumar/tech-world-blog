// All user route are here 
// importing some useful content 
const router=require("express").Router();
const UserModel=require("../models/User");
const passport=require("passport");
const express=require("express");
const app=express();
// app.use(passport.session({
//   secret:"hello",
//   resave(),
//   saveUniitialized:true,
//   co
// }))
app.use(passport.initialize());
app.use(passport.session())
router.post("/signup",(req,res)=>{
  try {
    
    if(req.body===null){
        console.log("form is incomplete")
        return false;
       }
    const newUser=new UserModel({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })
    const isSaved=newUser.save();
    if(isSaved){
        res.status(200).json({"message":"Successfully account registered "})
        console.log("successfully registered account")
        res.redirect("/")
    }
  } catch (error) {
   console.log(error) 
  }
});

router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

  // passport.use(new LocalStrategy(
  //   function(username, password, done) {
  //     User.findOne({ username: username }, function (err, user) {
  //       if (err) { return done(err); }
  //       if (!user) { return done(null, false); }
  //       if (!user.verifyPassword(password)) { return done(null, false); }
  //       return done(null, user);
  //     });
  //   }
  // ))
module.exports=router;