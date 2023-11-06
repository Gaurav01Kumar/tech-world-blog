const router=require("express").Router();
const controller=require("../../../controler")
router.post("/sign-up",controller.userSignUp);
router.post("/login",controller.userLogin)

module.exports=router;