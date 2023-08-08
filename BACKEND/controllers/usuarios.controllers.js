import Usuarios from "../models/Usuarios.js";
import bcryptjs from "bcryptjs";

const getUsers = async (req, res)=>{
    const {desde, hasta} = req.query;
    const query = {estado : true};

    const [total, usuarios ] = await Promise.all([
        Usuarios.countDocuments(query),
        Usuarios.find(query)
        .skip(Number(desde))
        .skip(Number(hasta))
    ]);
    res.json({
        total,
        usuarios
    })
}

const postUsers = async (req, res)=>{
 
    const {nombre, email, password, rol} = req.body;
    const usuario = new Usuarios({nombre, email, password, rol});

    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    await usuario.save();
    res.json({
        "message": "hablo desde post ya cada vez mas cerca de lograr pasar el filtro", usuario
    })
}


const deleteUsers = async (req, res) =>{
    const {id} = req.params 

    const usuario = await Usuarios.findByIdAndUpdate(id, {estado :false});

    res.json(usuario);
}

const putUsers = async (req, res) =>{
    const {id} = req.params

    const { _id, password, googleSignIn, ...resto} = req.body;

    if (password) {
        const salt  = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuarios.findByIdAndUpdate(id, resto , {new:true});

    res.json({
        msg:"Usuario Actualizado",
        usuario : usuario
    })
}

export {
    getUsers,
    postUsers,
    deleteUsers,
    putUsers
}