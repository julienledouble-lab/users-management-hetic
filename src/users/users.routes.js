import { Router } from "express";
import { handleCreateUser } from "./user.controller.js";
import { handlelistUsers } from "./user.controller.js";
import { handleGetUserById } from "./user.controller.js";
import { handleDeleteUser } from "./user.controller.js";

const router = Router();

// Importer les fonctions de contrôle des utilisateurs

router.post('/', handleCreateUser);

router.get ('/', handlelistUsers);

router.get('/:id', handleGetUserById);

router.delete('/:id', handleDeleteUser);

export default router;

