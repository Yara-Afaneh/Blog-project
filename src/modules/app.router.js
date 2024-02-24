import { connectDb } from '../../DB/connection.js';
import userRouter from './users/user.router.js';
import blogRouter from "./blog/blog.router.js";
import authRouter from "./auth/auth.router.js";
import cors from 'cors';


export const initApp=(app,express)=>{
    connectDb();
    app.use(cors())
    app.use(express.json());
    app.get('/',(req,res)=>{
        return res.json('Welcome')
    })
    app.use('/users',userRouter);
    app.use('/blogs',blogRouter);
    app.use('/auth',authRouter);
    app.get('*',(req,res)=>{
        return res.json({message:'page not found'})
    })

}
