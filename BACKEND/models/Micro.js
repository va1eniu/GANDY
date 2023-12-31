import { Schema, model } from "mongoose";


const microSchema = Schema({
    nombre: {
      type: String,
      required: [true, "El campo de nombre es requerido"],
      trim: true
    },
    categoria: {
      type: String,
      required: true,
      trim: true,
    },
    descripcion: {
      type: String,
      required: true,
      trim: true,
    },
    imagen: {
      type: String,
      required: true,
    }
  });
  
  const Micro = model("microempresas", microSchema);
  
  export default Micro;