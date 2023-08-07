import { Router } from "express";
import { createBootcamp, addUser, findById, findAll } from "../controllers/bootcamp.controller.js";

const routerBootcamp = Router();

// Ruta para crear y guardar un nuevo Bootcamp
routerBootcamp.post("/bootcamps", createBootcamp);

// Ruta para agregar un Usuario al Bootcamp
routerBootcamp.post("/bootcamps/:bootcampId/users", addUser);

// Ruta para obtener un Bootcamp por id
routerBootcamp.get("/bootcamps/:id", findById);

// Ruta para obtener todos los Bootcamps incluyendo los Usuarios
routerBootcamp.get("/bootcamps", findAll);

export { routerBootcamp };