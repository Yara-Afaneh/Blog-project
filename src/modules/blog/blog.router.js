import * as blogController  from "./blog.cotroller.js";
import { Router } from "express";
const router= Router();


router.get('/',blogController.getblogs);
router.post('/add',blogController.addBlog);


export default router;