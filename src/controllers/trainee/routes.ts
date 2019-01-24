import trainee  from './Controller'
import * as express from 'express';
const traineeRouter:express.Router= express.Router();
traineeRouter.get("/",trainee.get);
traineeRouter.post("/",trainee.create);
traineeRouter.put("/",trainee.put);
traineeRouter.delete("/",trainee.delete);
export default traineeRouter;
