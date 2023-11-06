const router=require("express").Router();
const userRoute=require("./User/user.routes");
router.use("/user",userRoute)
module.exports=router;