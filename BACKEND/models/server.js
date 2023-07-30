import express from "express";
import cors from "cors";
import conectarDB from "../database/config.js";
import RouterMicro from "../routes/micro.routes.js";


class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.middlewares();
    this.connect();
    this.microPath = "/micro"
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
    this.app.use(this.microPath, RouterMicro)
  }
 
  listen() {
    this.app.listen(this.port, () => {
      console.log(`hi from port ${this.port}`);
    });
  }
}
export default Server;
