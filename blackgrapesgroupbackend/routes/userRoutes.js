import express from "express";
import { createUser } from "../controllers/userController.js";
import { validateUser } from "../middleware/validationMiddleware.js";

const router = express.Router();

router.post("/register", validateUser, createUser);

export default router;
