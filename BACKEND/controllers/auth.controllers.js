import { response } from "express";
import Usuarios from "../models/Usuarios.js";
import bcryptjs from "bcryptjs";
import generateJWT from "../helpers/generate.jwt.js";

const login = async (req, res = response) => {
    const { email, password } = req.body;
    try {
        const usuario = await Usuarios.findOne({ email });

        if (!usuario) {
            return res.status(400).json({
                msg: "El email no existe en la base de datos"
            });
        }

        if (!usuario.estado) {
            return res.status(400).json({
                msg: "El usuario está inactivo"
            });
        }

        const validPassword = bcryptjs.compareSync(password, usuario.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: "Contraseña incorrecta"
            });
        }

        const token = await generateJWT(usuario.id);

        res.json({
            success: true,
            message: "Inicio de sesión exitoso",
            token
        });
    } catch (error) {
        console.log("Error en el servidor:", error);
        return res.status(500).json({
            msg: "Contacte al servicio técnico"
        });
    }
}

export default login;
