import { Router } from 'express';
import { traineeRouter } from './controllers/trainee';
import { UserRouter } from './controllers/user';
const router: Router = Router();
router.use('/trainee', traineeRouter);
router.use('/user', UserRouter);
export default router;
