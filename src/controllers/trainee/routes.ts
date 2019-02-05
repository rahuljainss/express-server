import * as express from 'express';
import { authMiddleWare } from '../../libs/routes';
import validationHandler from '../../libs/routes/validationHandler';
import trainee from './Controller';
import validation from './validation';
const traineeRouter: express.Router = express.Router();
traineeRouter
  .get(
    '/',
    validationHandler(validation.get),
    authMiddleWare('TRAINEEE', 'write'),
    trainee.get,
  )
  .post(
    '/',
    validationHandler(validation.create),
    authMiddleWare('TRAINEEE', 'read'),
    trainee.create,
  )
  .put(
    '/',
    validationHandler(validation.update),
    authMiddleWare('TRAINEEE', 'delete'),
    trainee.update,
  )
  .delete(
    '/:id',
    validationHandler(validation.delete),
    authMiddleWare('TRAINEEE', 'all'),
    trainee.delete,
  );
export default traineeRouter;
