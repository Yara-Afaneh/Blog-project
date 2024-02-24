
import * as userController  from "./user.controller.js";
import { Router } from "express";
const router= Router();


router.get('/',userController.getusers);
router.delete('/delete/:id',userController.deleteUser);
router.patch('/update/:id',userController.updateUser);

 

export default router;