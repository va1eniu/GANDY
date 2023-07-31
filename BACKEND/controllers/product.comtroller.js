import Produc from "../models/Produc.js";

const getCreyente = async (req, res)=>{
   const creyentes = await Produc.find();
   res.json(creyentes);
}

export {
    getCreyente
};