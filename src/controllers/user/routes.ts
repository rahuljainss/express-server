import * as express from 'express';
import { authMiddleWare } from '../../libs/routes';
import user from './Controller';
const UserRouter: express.Router = express.Router();
UserRouter.get('/', authMiddleWare('TRAINEEE', 'read'), user.get)
  .post(
    '/',
    // authMiddleWare('TRAINEEE', 'read'),
    user.create,
  )
  .put(
    '/',
    user.put,
  )
  .delete(
    '/:_id',
  user.delete,
  );
export default UserRouter;
