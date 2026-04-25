import express from "express";
import LivrosControllers from "../controllers/livrosController.js";
import livro from "../models/livros.js";

const routes = express.Router();

routes.get("/livros", LivrosControllers.listarLivros);

export default routes;
