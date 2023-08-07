import { Router } from "express";
import{ createUser, findUserById, findAll, updateUserById, deleteUserById } from "../controllers/user.controller.js"

const routerUser = Router();

// Ruta para crear y guardar usuarios
routerUser.post("/usuarios", createUser);

// Ruta para obtener los Bootcamp de un usuario
routerUser.get("/usuarios/:id", findUserById);

// Ruta para obtener todos los Usuarios incluyendo los Bootcamp
routerUser.get("/usuarios", findAll);

// Ruta para actualizar usuario por Id
routerUser.put("/usuarios/:id", updateUserById);

// Ruta para eliminar un usuario por Id
routerUser.delete("/usuarios/:id", deleteUserById);

export {routerUser};





