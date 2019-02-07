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
    console.log(req.body);
    user
      .createUser(req.body)
      .then((data) =>
        res
          .status(200)
          .send(SuccessHandler('User Data', 'Successfully created', data)),
      );
  }

public put(req: Request, res: Response) {
  console.log('Inside put method');
  const user = new UserRepository();
  const { id, dataToUpdate } = req.body;
  const originalId = id;
  const name = dataToUpdate.name;
  user
  .updateUser({name, originalId})
  .then(() =>
  res
  .status(200)
  .send(
  SuccessHandler(
  'Update',
  'Successfully Updated User',
  `${name} is the new updated value`,
  ),
  ),
  );
  }
  // public update(req: Request, res: Response) {
  //   const user = new UserRepository();
  //   const data1 = req.body;
  //   user.update(data:any).then((data1) =>
  //     res.status(200).send({
  //       message: 'Successfully Updated',
  //       status: 'ok',
  //     }),
  //   );
  // }
  public delete(req: Request, res: Response) {
    const user = new UserRepository();
    user
      .deleteUser(req.params)
      .then((data) =>
        res
          .status(200)
          .send(SuccessHandler('User Data', 'Successfully deleted', data)),
      );
  }
  public createtoken(req: Request, res: Response, next) {
    res
          .status(200)
          .send(SuccessHandler('OK', 'Successfully generated token' , req.body.token));
  }
}
export default UserController.getInstance(new UserController());
