import {Router,Request,Response} from 'express';
import {traineeRouter} from './controllers/trainee';
const router:Router = Router();
router.use('/trainee',traineeRouter);
router.use('/user',(req:Request,res:Response)=>{
console.log("user");
res.send("user")
});
export default router;
