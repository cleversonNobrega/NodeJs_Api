# 📖 NodeJs_Api
 
API RESTful desenvolvida em Node.js com Express e MongoDB para gerenciamento de um acervo de **livros e autores**.
 
---
 
## 🚀 Funcionalidades
 
- CRUD completo de **Livros** (cadastrar, listar, buscar por ID, buscar por editora, atualizar, excluir)
- CRUD completo de **Autores** (cadastrar, listar, buscar por ID, atualizar, excluir)
- Ao cadastrar um livro, os dados do autor são embutidos automaticamente no documento
- Conexão com banco de dados MongoDB via Mongoose
- Configuração de ambiente com variáveis `.env`
---
 
## 🛠️ Tecnologias
 
- [Node.js](https://nodejs.org/) (ES Modules)
- [Express 5](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)
- [dotenv](https://github.com/motdotla/dotenv)
- [Nodemon](https://nodemon.io/) — hot reload em desenvolvimento
---
 
## 📦 Instalação
 
Clone o repositório e instale as dependências:
 
```bash
git clone https://github.com/cleversonNobrega/NodeJs_Api.git
cd NodeJs_Api
npm install
```
 
> Requisito: **Node.js v18+** e uma instância do **MongoDB** rodando (local ou Atlas)
 
---
 
## ⚙️ Configuração
 
Crie um arquivo `.env` na raiz do projeto com a string de conexão do MongoDB:
 
```env
DB_CONNECTION_STRING=mongodb://localhost:27017/nome-do-banco
```
 
---
 
## ▶️ Como executar
 
```bash
# Modo desenvolvimento (com hot reload)
npm run dev
 
# Modo produção
node server.js
```
 
O servidor iniciará na porta **3000**.
 
---
 
## 🔗 Endpoints
 
### Livros — `/livros`
 
| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/livros` | Lista todos os livros |
| `GET` | `/livros/:id` | Busca um livro por ID |
| `GET` | `/livros/busca?editora=` | Busca livros por editora |
| `POST` | `/livros` | Cadastra um novo livro |
| `PUT` | `/livros/:id` | Atualiza um livro |
| `DELETE` | `/livros/:id` | Remove um livro |
 
### Autores — `/autores`
 
| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/autores` | Lista todos os autores |
| `GET` | `/autores/:id` | Busca um autor por ID |
| `POST` | `/autores` | Cadastra um novo autor |
| `PUT` | `/autores/:id` | Atualiza um autor |
| `DELETE` | `/autores/:id` | Remove um autor |
 
---
 
## 📋 Exemplos de uso
 
### Cadastrar um autor
 
```http
POST /autores
Content-Type: application/json
 
{
  "nome": "Machado de Assis",
  "nacionalidade": "Brasileiro"
}
```
 
### Cadastrar um livro
 
```http
POST /livros
Content-Type: application/json
 
{
  "titulo": "Dom Casmurro",
  "editora": "Ática",
  "preco": 39.90,
  "paginas": 256,
  "autor": "<id-do-autor>"
}
```
 
> O campo `autor` recebe o `_id` de um autor já cadastrado. Os dados do autor serão incorporados automaticamente ao documento do livro.
 
---
 
## 📁 Estrutura do Projeto
 
```
NodeJs_Api/
├── src/
│   ├── app.js                  # Configuração do Express e conexão com o banco
│   ├── config/
│   │   └── dbConnect.js        # Conexão com o MongoDB via Mongoose
│   ├── controllers/
│   │   ├── livrosController.js # Lógica de negócio dos livros
│   │   └── autorController.js  # Lógica de negócio dos autores
│   ├── models/
│   │   ├── livros.js           # Schema Mongoose de Livro
│   │   └── Autor.js            # Schema Mongoose de Autor
│   └── routes/
│       ├── index.js            # Registro central das rotas
│       ├── livrosRoutes.js     # Rotas de livros
│       └── autoresRoutes.js    # Rotas de autores
├── server.js                   # Ponto de entrada da aplicação
├── .env                        # Variáveis de ambiente (não versionado)
└── package.json
```
 
---
 
