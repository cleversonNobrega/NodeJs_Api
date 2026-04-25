import express from "express";

const app = express();

const livros = [
  {
    id: 1,
    titulo: "O senhor dos anéis",
  },
  {
    id: 2,
    titulo: "O Hobbit",
  },
];

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
});

export default app;
