const express = require('express');     // Importando as funcionalidade do EXPRESS para dentro da variável chamada express


const cors = require('cors'); // Modulo quem vai poder acessar a nossa aplicação - Modulo de Segurança
const routes = require('./routes');    // Importando a variável routes do arquivo routes.js 
const app = express();  // Variável app armazena a minha aplicacao


app.use(cors());
app.use(express.json()); // Para o app entender a requisição no formato Json.
app.use(routes);    


/*  Rota = url por completo / Recurso - é oq vem depois da barra EX: Recursos Usuário. 
-------------------------------------------------------------

Mátados HTTP: 

GET: Buscar/Listar uma informação do back-end
POST: Criar uma informação no back-end
PUT: Alterar uma informação do back-end
DELETE: Deletar uma informação no back-end
*/

/*
 *  Tipoes de Parâmetros
 *
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação)  
 *  /users?name=Francisco
 * 
 * Router Params:  Parâmetros utilizados para identificar recursos
 * (OBS: UM UNICO RECURSO EX: UM UNICO USUARIO)   /users/1
 * 
 * Request Body: Corpo da Requisição, utilizado para criar ou alterar recursos. 
 *   
 */

 /*   BANCO DE DADOS - Linguagem SQL: SQLite
     Duas formar de conectar o BD na Aplicação:

     Driver Geral do BD: EX:SELECT * FROM users < - São CHamados de Query
     Query Builder: EX: table('users').select('*').where() 

     -- KNEX.JS é uma Query Builder: é um construtor de consultar SQL

     Após intalar,

     npx knex init - Cria uma arquivo para config do BD
 
  */


 
 
app.listen(3333);
