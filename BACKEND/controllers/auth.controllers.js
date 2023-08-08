import { response } from "express";
import Usuarios from "../models/Usuarios.js";
import bcryptjs from "bcryptjs"
import generateJWT from "../helpers/generate.jwt.js"

const login = async (req, res =response)=>{
    const {email, password} = req.body;
    try {
        const usuario = await Usuarios.findOne({email});

        if (!usuario) {
            return res.status(400).json({
                msg:"el usuario no es correcto "
            })
        }

        if (!usuario.estado) {
            return res.status(400).json({
                msg: "estado inactivo"
            })
        }

        const validPassword = bcryptjs.compareSync(password, usuario.password);
        if (!validPassword) {
            return res.status(400).json({
                msg :"password incorrecto"
            })
        }

        const token = await generateJWT(usuario.id)

        res.json({
            usuario, token

        })



    } catch (error) {
        console.log(error);
        return res.json({
            msg :"contacte al servicio tecnico"
        })
    }
}

export default login;
