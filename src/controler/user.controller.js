const authentication=require("../core/JWT")
const {  constants, statusCode } = require("../constant/index");
const {config:config}=require("../../config")
const User=require("../models/User");
const bcrypt=require("bcryptjs");
const userController = {};
//for loging existing user
userController.login=async(req,res)=>{
  try {
    const {email,password}=req.body;
    const isUserExist=await User.findOne({email:email});
    if(isUserExist){
      const isPasswordMatch=await bcrypt.compare(password,isUserExist.password);
      if(isPasswordMatch){
        const token=await authentication.generateToken(isUserExist);
        const cookies= res.cookie('access_token',token,{
          httpOnly:true
        })
        return res.status(statusCode.ACCEPTED).json({message:constants.LOGIN_SUCCESS,data:isUserExists,token:token,cookies:cookies})
      }
      return res.status(statusCode.FORBIDDEN).json({message:constants.FORBIDDEN})
    }
    return res.status(statusCode.NOT_FOUND).json({message:constants.USER_NOT_FOUND});
  } catch (error) {
    return res
    .status(stautsCode.INTERNAL_SERVER_ERROR)
    .json({ error: constants.INTERNAL_SERVER_ERROR });
  }
}

//for new signup user
userController.signup =async (req,res) => {
  try {
    const {username,email,password,firstName,lastName}=req.body;
    if(username!==null || username!==undefined && email!==undefined||email !==null ){
        const hashPassword=await bcrypt.hash(password,config.PASS_SECRET)
        const newUser=new User({
            username,
            email,
            password:hashPassword,
            firstName,
            lastName,
        });
        const isSaved=await newUser.save();
        if(isSaved){
            const token=await authentication.generateToken(isSaved);
            return res.cookie('access_token',token,{
              httpOnly:true
            })
        }
    }
    return res.status({code:statusCode.NOT_ACCEPTABLE}).json({message:constants.MISSING_FIELD})
  } catch (error) {
    return res
      .status(stautsCode.INTERNAL_SERVER_ERROR)
      .json({ error: constants.INTERNAL_SERVER_ERROR });
  }
};

module.exports = userController;
