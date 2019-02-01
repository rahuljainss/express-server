import user from "./Controller";
import * as express from "express";
import validationHandler from "../../libs/routes/validationHandler";
import { authMiddleWare } from "../../libs/routes";
const UserRouter: express.Router = express.Router();
UserRouter.get("/", user.get)
  .post(
    "/",
    user.create
  )
  .put(
    "/",
    user.update
  )
  .delete(
    "/:_id",
    user.delete
  );
export default UserRouter;
