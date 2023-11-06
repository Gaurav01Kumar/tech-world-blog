const userController=require("./user.controller")
const controller={
    userSignUp:userController.signup,
    userLogin:userController.login
};

module.exports=controller;