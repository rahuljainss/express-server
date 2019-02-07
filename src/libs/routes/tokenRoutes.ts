import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import UserRepository from '../../repositories/user/UserRepository';
import { IUserModel } from './../../repositories/user/IUserModel';
import { userModel } from './../../repositories/user/UserModel';

const userRepo = new UserRepository();
export default function tokenRoutes() {
  return (req, res , next) => {
    const { emailid, pass } = req.query;
    userRepo.findone({email: emailid }).then((result: IUserModel) => {
      console.log(result);
      if (!result) {
        next({
          error: 'Invalid Email',
          message: 'Unauthorised Access',
          status: 401,
        });
      }
      const { password } = result;
      if (bcrypt.compareSync(pass, password)) {
        const token = jwt.sign({ result, exp: Math.floor(Date.now() / 1000) + 900 }, process.env.Key);
        console.log(token);
        req.body.token = token;
        next();
      }
      else {
        next({
          error: 'Wrong Password',
          message: 'Unauthorised Access',
          status: 401,
        });
      }
    })
    .catch((err) => {
      next({
        error: 'User not found',
        message: 'Unauthorised Access',
        status: 404,
      });
    });
  };
}
