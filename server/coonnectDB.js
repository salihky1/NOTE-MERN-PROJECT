const mongoose =require("mongoose");

const connectDB=async()=>{
    mongoose.connect("mongo db url ")
    .then(()=>console.log("Db connection succesfully"))
    .catch((err)=>{
        console.log(err);
    })
    
}

module.exports=connectDB;