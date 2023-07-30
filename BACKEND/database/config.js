import mongoose from "mongoose";

const conectarDB = async ()=>{
   try {
    await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    console.log('estas conectado :D');
   } catch (error) {
    console.log(error);
    throw new Error('no pudimos iniciar :(')
   }
}

export default conectarDB;