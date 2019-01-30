import trainee from "./Controller";
import * as express from "express";
import validationHandler from "../../libs/routes/validationHandler";
import validation from "./validation";
import { authMiddleWare } from "../../libs/routes";
const traineeRouter: express.Router = express.Router();
traineeRouter
  .get(
    "/",
    validationHandler(validation.get),
    authMiddleWare("TRAINEEE", "write"),
    trainee.get
  )
  .post(
    "/",
    validationHandler(validation.create),
    authMiddleWare("TRAINEEE", "read"),
    trainee.create
  )
  .put(
    "/",
    validationHandler(validation.update),
    authMiddleWare("TRAINEEE", "delete"),
    trainee.update
  )
  .delete(
    "/:id",
    validationHandler(validation.delete),
    authMiddleWare("TRAINEEE", "all"),
    trainee.delete
  );
export default traineeRouter;
