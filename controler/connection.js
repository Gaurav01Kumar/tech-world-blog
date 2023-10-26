const mongoose=require("mongoose");
// Setting conection b/w server and databse 
mongoose.connect("mongodb://localhost:27017/Bloging",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    family:4
}).then(()=>console.log("Server is connected to data base "))
.catch((e)=>console.log(e))