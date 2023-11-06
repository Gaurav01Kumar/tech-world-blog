require("dotenv").config();
 const config={
    PASS_SECRET:process.env.PASS_SECRET,
    TOKEN_SECRET:process.env.TOKEN_SECRET

}
module.exports=config;
