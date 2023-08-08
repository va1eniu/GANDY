import { getUsers, postUsers, deleteUsers, putUsers } from "../controllers/usuarios.controllers.js";
import { check } from "express-validator";
import { Router } from "express";
import validateDocuments from "../middlewares/validate.documents.js";
import validateJWT from "../middlewares/validate.jwt.js";
import isAdminRole from "../middlewares/validate.role.js";
import {
 
  
    emailExiste,

    userExistsById,

  /*   findCategoryById,
    findCheeseById */
} from "../helpers/db.validators.js"

const router = Router();

router.get("/", getUsers);

router.post("/", [
    check('nombre', 'Nombre no es valido').not().isEmpty(),
    check('password', 'Password debe ser de minimo 6 letras').isLength({min :6}),
    check('email', 'El email no es valido').isEmail(),
    check('email').custom(emailExiste ),
    validateDocuments
], postUsers);

router.delete("/:id", [

        validateJWT,
        isAdminRole,   
        check('id', 'No es un ID válido').isMongoId(),
        check('id').custom( userExistsById ),  
        validateDocuments

], deleteUsers)

router.put("/:id", [
    check('id', 'No es un ObjectID MongoDB válido').isMongoId(),
    check('id').custom( userExistsById ),

    validateDocuments
], putUsers)

export default router;