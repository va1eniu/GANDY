

import Usuarios from '../models/Usuarios.js';

/* import Categoria from '../models/Categoria.js'; */

/* const Cheese = require('../models/Cheese.js'); */



 const emailExiste = async( email = '' ) => {
    const existeEmail = await Usuarios.findOne({email});
    if(existeEmail){
     
        throw new Error(`El email: ${ email }, ya está registrado`);
    }
 }


 const userExistsById = async( id ) => {


    const userExists = await Usuarios.findById(id);
    if ( !userExists ) {
        throw new Error(`El id (usuario) no existe ${ id }`);
    }
}

/* const findCategoryById = async( id ) => {


    const findCategory = await Categoria.findById(id);
    if ( !findCategory ) {
        throw new Error(`El id de categoria no existe ${ id }`);
    }
}

const findCheeseById = async( id ) => {

    const findCheese = await Cheese.findById(id);
    if ( !findCheese ) {
        throw new Error(`El id no existe ${ id }`);
    }
} */ 

export {

  
    emailExiste,

    userExistsById,

/*    findCategoryById,
    findCheeseById  */
}