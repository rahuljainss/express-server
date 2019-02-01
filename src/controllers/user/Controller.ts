import UserRepository from "../../repositories/user/UserRepository";
import { Request, Response, NextFunction } from "express";
import SuccessHandler from "../../libs/routes/SuccessHandler";
class UserController {
  public static getInstance(instance: UserController) {
    if (!instance) {
      instance = new UserController();
    }
    return instance;
  }
  get(req: Request, res: Response) {
    console.log("Inside get");
    const id = req.query.id;
    console.log(id);
    const user = new UserRepository();
    user
      .getUser(id)
      .then(data =>
        res
          .status(200)
          .send(SuccessHandler("User Data", "Successfully Fetch User", data))
      );
  }

  create(req: Request, res: Response) {
    const user = new UserRepository();
    user
      .create(req.body)
      .then(data =>
        res
          .status(200)
          .send(SuccessHandler("User Data", "Successfully created", data))
      );
  }
  update(req: Request, res: Response) {
    const user = new UserRepository();
    const { olddata, newdata } = req.body;
    user.update({ name: olddata }, { name: newdata }).then(data =>
      res.status(200).send({
        status: "ok",
        message: "Successfully Updated"
      })
    );
  }
  delete(req: Request, res: Response) {
    const user = new UserRepository();
    user
      .delete(req.params)
      .then(data =>
        res
          .status(200)
          .send(SuccessHandler("User Data", "Successfully deleted", data))
      );
  }
}
export default UserController.getInstance(new UserController());
