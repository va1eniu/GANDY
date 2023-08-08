import express from "express";
import cors from "cors";
import conectarDB from "../database/config.js";
import RouterMicro from "../routes/micro.routes.js";
import RouterProduct from "../routes/product.routes.js";
import RouterDona from "../routes/dona.routes.js";
import routerAuth from "../routes/auth.routes.js";
import routerUsua from "../routes/usuarios.router.js";


class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.middlewares();
    this.connect();
    this.paths = {
      microPath : "/micro",
      produPath : "/productos",
      donaPath : "/donaciones",
      authPath : "/auth",
      usuarios: "/usuarios"

  }

   
    this.routes();

 
  }
  async connect() {
    await conectarDB();
  }
  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes(){
    this.app.use(this.paths.microPath, RouterMicro)
    this.app.use(this.paths.produPath, RouterProduct)
    this.app.use(this.paths.donaPath, RouterDona)
    this.app.use(this.paths.authPath, routerAuth)
    this.app.use(this.paths.usuarios, routerUsua)
  }
 
  listen() {
    this.app.listen(this.port, () => {
      console.log(`hi from port ${this.port}`);
    });
  }
}
export default Server;
