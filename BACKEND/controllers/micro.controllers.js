import Micro from "../models/Micro.js";

const getCreyente = async (req, res)=>{
   const creyentes = await Micro.find();
   res.json(creyentes);
}

export {
    getCreyente
};





