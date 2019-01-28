import trainee from "./Controller";
import * as express from "express";
import validationHandler from '../../libs/routes/validationHandler';
import validation from './validation';
const traineeRouter: express.Router = express.Router();
traineeRouter
  .get("/", validationHandler(validation.get),trainee.get)
  .post("/", validationHandler(validation.create),trainee.create)
  .put("/", validationHandler(validation.update),trainee.update)
  .delete("/:id",validationHandler(validation.delete),trainee.delete);
export default traineeRouter;
