import * as jwt from 'jsonwebtoken';
import UserRepository from '../../repositories/user/UserRepository';
import hasPermission from './permissions';
export default (module, permissiontype) => (req, res, next) => {
  console.log('Inside auth middleware', module, permissiontype);
  const repository = new UserRepository();
  const token = req.header('Authorization');
  console.log('value of token:', token);
  const key = process.env.Key;
  console.log('Key is:', key);
  const user = jwt.verify(token, key);
  if (!user) {
    next({
      message: 'Unauthorized Access',
      status: 403,
    });
  } else {
    console.log(user);
    repository.findone({ _id: user._id }).then((data) => {
      const role = data.role;
      console.log(role);
      if (!hasPermission(module, role, permissiontype)) {
        next({ message: 'Unauthorized Access', status: 403 });
      } else {
        console.log('Permission is allowed');
        req.body.id = data._id;
        next();
      }
    });
  }
};
