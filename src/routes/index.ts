import { Router, Request, Response } from "express";

import {
  createUser,
  getUsers,
  deleteUser,
} from "../controllers/userController";

interface IRecurso {
  id: string;
  nombre: string;
}

const router: Router = Router();

router.post("/users", createUser);
router.get("/users");
router.delete("/users");

export default router;
