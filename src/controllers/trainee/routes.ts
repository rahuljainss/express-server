import trainee from "./Controller";
import * as express from "express";
const traineeRouter: express.Router = express.Router();
traineeRouter
  .get("/", trainee.get)
  .post("/", trainee.create)
  .put("/", trainee.update)
  .delete("/:id", trainee.delete);
export default traineeRouter;
