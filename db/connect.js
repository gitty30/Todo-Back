const mongoose=require('mongoose');

mongoose.set("strictQuery", true);

const connectdb=async (URL)=>{
     await mongoose.connect(URL);
}

module.exports=connectdb;