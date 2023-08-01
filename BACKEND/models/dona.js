import { Schema, model } from "mongoose";


const donaSchema = Schema({
    nombre: {
      type: String,
      required: [true, "El campo de nombre es requerido"],
      trim: true
    },
    fundacion: {
      type: String,
      required: true,
      trim: true,
    },
    cantidad: {
      type: String,
      required: true,
      trim: true,
    }
  });
  
  const Dona = model("donaciones", donaSchema);
  
  export default Dona;