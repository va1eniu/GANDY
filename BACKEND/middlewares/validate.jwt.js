import { response, request  } from "express"
import  jsonwebtoken from "jsonwebtoken";

import Usuarios from "../models/Usuarios.js";


const validateJWT = async(  req = request, res = response, next) => {


    const token = req.header('x-api-token-jwt');

    
    if ( !token ) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }

    try {
        
   

        const {uid} = jsonwebtoken.verify( token, process.env.SECRET_OR_PRIVATE_KEY );

         const usuario = await Usuarios.findById( uid );

        if( !usuario ) {
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe DB'
            })
        } 

         if ( !usuario.estado ) {
            return res.status(401).json({
                msg: 'Token no válido - usuario con estado: false'
            })
        } 
        
        
        req.usuario = usuario; 
        console.log("req usuario en validate",req.usuario);
        next();

    } catch (error) {

        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        })
    }


}


export  default validateJWT