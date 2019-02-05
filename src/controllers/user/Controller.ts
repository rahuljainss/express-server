import { Request, Response } from 'express';
import SuccessHandler from '../../libs/routes/SuccessHandler';
import UserRepository from '../../repositories/user/UserRepository';
class UserController {
  public static getInstance(instance: UserController) {
    if (!instance) {
      instance = new UserController();
    }
    return instance;
  }
  public get(req: Request, res: Response) {
    console.log('Inside get');
    console.log(req.body);
    const user = new UserRepository();
    user
      .findone({_id: req.body.id})
      .then((data) =>
        res
          .status(200)
          .send(SuccessHandler('User Data', 'Successfully Fetch User', data)),
      );
  }

  public create(req: Request, res: Response) {
    const user = new UserRepository();
    user
      .create(req.body)
      .then((data) =>
        res
          .status(200)
          .send(SuccessHandler('User Data', 'Successfully created', data)),
      );
  }
  public update(req: Request, res: Response) {
    const user = new UserRepository();
    const { olddata, newdata } = req.body;
    user.update({ name: olddata }, { name: newdata }).then((data) =>
      res.status(200).send({
        message: 'Successfully Updated',
        status: 'ok',
      }),
    );
  }
  public delete(req: Request, res: Response) {
    const user = new UserRepository();
    user
      .delete(req.params)
      .then((data) =>
        res
          .status(200)
          .send(SuccessHandler('User Data', 'Successfully deleted', data)),
      );
  }
}
export default UserController.getInstance(new UserController());
