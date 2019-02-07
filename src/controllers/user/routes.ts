import * as express from 'express';
import { authMiddleWare, validationHandler } from '../../libs/routes';
import { tokenRoutes } from '../../libs/routes';
import { validation } from '../trainee';
import user from './Controller';
const UserRouter: express.Router = express.Router();
UserRouter.get('/', authMiddleWare('TRAINEEE', 'read'),
validationHandler(validation.get), user.get)
  .post(
    '/',
    // authMiddleWare('TRAINEEE', 'read'),
    // tokenRoutes(),
    // user.createtoken,
    validationHandler(validation.create),
    user.create,
  )
  .put(
    '/',
    validationHandler(validation.update),
    user.put,
  )
  .delete(
    '/:originalId',
    validationHandler(validation.delete),
  user.delete,
  );
export default UserRouter;
