import * as authController  from "./auth.controller.js";
import { Router } from "express";
const router= Router();

router.post('/register',authController.register);
router.get('/login',authController.login)


export default router;