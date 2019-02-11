import * as express from 'express';
import { authMiddleWare, validationHandler } from '../../libs/routes';
import { tokenRoutes } from '../../libs/routes';
import validation from '../trainee/validation';
import validations from '../user/validations';
import user from './Controller';
const UserRouter: express.Router = express.Router();
UserRouter.get('/',
validationHandler(validation.get), authMiddleWare('TRAINEEE', 'read'), user.get)
  .post(
    '/Login',
    validationHandler(validations.create),
    tokenRoutes(),
    user.createtoken,
  )
  .post(
    '/',
    validationHandler(validation.create),
    authMiddleWare('TRAINEEE', 'write'),
    user.create,
  )
  .put(
    '/',
    validationHandler(validation.update),
    authMiddleWare('TRAINEEE', 'all'),
    user.put,
  )
  .delete(
    '/:originalId',
    validationHandler(validation.delete),
    authMiddleWare('TRAINEEE', 'delete'),
    user.delete,
  );
export default UserRouter;
