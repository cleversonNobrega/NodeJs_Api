# 📚 NodeJs API — Gerenciamento de Livros e Autores
 
API RESTful desenvolvida com **Node.js**, **Express** e **MongoDB/Mongoose** para gerenciamento de um catálogo de livros e autores.
 
---
 
## 🚀 Tecnologias Utilizadas
 
| Tecnologia | Versão | Finalidade |
|---|---|---|
| [Node.js](https://nodejs.org/) | LTS | Runtime JavaScript |
| [Express.js](https://expressjs.com/) | ^4.x | Framework web |
| [MongoDB](https://www.mongodb.com/) | — | Banco de dados NoSQL |
| [Mongoose](https://mongoosejs.com/) | ^7.x | ODM para MongoDB |
| [Nodemon](https://nodemon.io/) | — | Hot reload em desenvolvimento |
| [Dotenv](https://github.com/motdotla/dotenv) | — | Variáveis de ambiente |
 
---
 
## 📁 Estrutura do Projeto
 
```
NodeJs_Api/
├── server.js                  # Ponto de entrada da aplicação
├── package.json
└── src/
    ├── app.js                 # Configuração do Express
    ├── config/
    │   └── dbConnect.js       # Conexão com o MongoDB
    ├── controllers/
    │   ├── livrosController.js
    │   └── autoresController.js
    ├── models/
    │   ├── Livro.js
    │   └── Autor.js
    ├── routes/
    │   ├── index.js
    │   ├── livrosRoutes.js
    │   └── autoresRoutes.js
    ├── middlewares/
    │   ├── manipulador404.js
    │   ├── manipuladorDeErros.js
    │   └── paginas.js
    └── Erros/
        ├── erroBase.js
        ├── erroValidacao.js
        ├── naoEncontrado.js
        └── RequisicaoIncorreta.js
```
 
---
 
## ⚙️ Instalação e Configuração
 
### Pré-requisitos
 
- [Node.js](https://nodejs.org/) >= 18.x
- [MongoDB](https://www.mongodb.com/) em execução local ou uma instância na nuvem (ex: MongoDB Atlas)
### 1. Clone o repositório
 
```bash
git clone https://github.com/cleversonNobrega/NodeJs_Api.git
cd NodeJs_Api
```
 
### 2. Instale as dependências
 
```bash
npm install
```
 
### 3. Configure as variáveis de ambiente
 
Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:
 
```env
PORT=3000
DB_CONNECTION_STRING=mongodb://localhost:27017/nome_do_banco
```
 
> 💡 Substitua `mongodb://localhost:27017/nome_do_banco` pela sua string de conexão do MongoDB.
 
### 4. Inicie o servidor
 
**Modo desenvolvimento (com hot reload):**
```bash
npm run dev
```
 
**Modo produção:**
```bash
node server.js
```
 
O servidor estará disponível em: `http://localhost:3000`
 
---
 
## 🔌 Endpoints da API
 
### Base
 
| Método | Rota | Descrição |
|---|---|---|
| GET | `/` | Retorna informações básicas da API |
 
---
 
### 📖 Livros — `/livros`
 
| Método | Rota | Descrição |
|---|---|---|
| GET | `/livros` | Lista todos os livros (paginado) |
| GET | `/livros/busca` | Busca livros por filtros (paginado) |
| GET | `/livros/:id` | Retorna um livro pelo ID |
| POST | `/livros` | Cadastra um novo livro |
| PUT | `/livros/:id` | Atualiza um livro pelo ID |
| DELETE | `/livros/:id` | Remove um livro pelo ID |
 
#### Exemplo de corpo para criação de livro (POST `/livros`)
 
```json
{
  "titulo": "Node.js: Do Zero à Produção",
  "autor": "64b1f2c3d4e5f6a7b8c9d0e1",
  "editora": "Casa do código",
  "numeroPaginas": 320
}
```
 
> ⚠️ **Editoras aceitas:** `"Casa do código"` ou `"Alura"`  
> ⚠️ **Número de páginas:** deve estar entre `10` e `5000`
 
---
 
### 👤 Autores — `/autores`
 
| Método | Rota | Descrição |
|---|---|---|
| GET | `/autores` | Lista todos os autores (paginado) |
| GET | `/autores/:id` | Retorna um autor pelo ID |
| POST | `/autores` | Cadastra um novo autor |
| PUT | `/autores/:id` | Atualiza um autor pelo ID |
| DELETE | `/autores/:id` | Remove um autor pelo ID |
 
#### Exemplo de corpo para criação de autor (POST `/autores`)
 
```json
{
  "nome": "Fulano de Tal",
  "nacionalidade": "Brasileira"
}
```
 
---
 
## 📐 Modelos de Dados
 
### Livro
 
| Campo | Tipo | Obrigatório | Restrições |
|---|---|---|---|
| `titulo` | String | ✅ | — |
| `autor` | ObjectId (ref: autores) | ✅ | — |
| `editora` | String | ✅ | `"Casa do código"` ou `"Alura"` |
| `numeroPaginas` | Number | ❌ | Entre 10 e 5000 |
 
### Autor
 
| Campo | Tipo | Obrigatório |
|---|---|---|
| `nome` | String | ✅ |
| `nacionalidade` | String | ❌ |
 
---
 
## 🛡️ Tratamento de Erros
 
A API conta com middlewares globais para tratamento de erros:
 
- **404 Not Found** — para rotas não existentes
- **Erros de Validação** — campos inválidos ou ausentes retornam mensagens descritivas
- **Erros Genéricos** — capturados e formatados de forma padronizada
---
