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
  public async get(req: Request, res: Response) {
    const user = new UserRepository();
    const { skip = 0, limit = 10 } = req.query;
    console.log(skip);
    console.log(limit);
    const data = await user.findone(skip, limit);
    const recordscount = await user.count();
    const data1 = [{ recordscount, data }];
    res.status(200).send(SuccessHandler('User Data', 'Successfully Fetch User', data1));
  }
  public async create(req: Request, res: Response) {
    const user = new UserRepository();
    console.log(req.body);
    const data = await user.createUser(req.body);
    res.status(200).send(SuccessHandler('User Data', 'Successfully created', data));
  }
  public async put(req: Request, res: Response) {
    const user = new UserRepository();
    const { id, dataToUpdate } = req.body;
    const originalId = id;
    const name = dataToUpdate.name;
    const data3 = await user
      .updateUser({ name, originalId });
    res
      .status(200)
      .send(
        SuccessHandler(
          'Update',
          'Successfully Updated User',
          `${name} is the new updated value`,
        ),
      );
  }
  public async delete(req: Request, res: Response) {
    const user = new UserRepository();
    const data = await user
      .deleteUser(req.params);
    res
      .status(200)
      .send(SuccessHandler('User Data', 'Successfully deleted', data));
  }
  public createtoken(req: Request, res: Response, next) {
    res
      .status(200)
      .send(SuccessHandler('OK', 'Successfully generated token', req.body.token));
  }
}
export default UserController.getInstance(new UserController());
