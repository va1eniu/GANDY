import { Schema, model } from "mongoose";


const productSchema = Schema({
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
    precio: {
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
  
  const Produc = model("productos", productSchema);
  
  export default Produc;