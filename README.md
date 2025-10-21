# aulaCRUD-backend-PJ2025
aula sobre CRUD PJ 2025

===============================
npm init
npm i express jest
npm i cross-env
================================
colocar no json

"type": "module",

"dev": "node --watch ./src/index.js",
"test": "cross-env TEST=true node --experimental-vm-modules node_modules/jest/bin/jest.js"
================================
 criar pasta src, controller, service e router
 criar arquivo index.js

 criar os arquivos .js dentro de cada pasta com seus respequitivos nomes
=================================
comecar a construir os arquivo index.js

importar o express, 
declarar o express
dzer que vai rodar com json,

testar
npm run dev
==================================
constrir as rotas

exportar o router no index


tesar com o postman se esta funcionando.
=====================================

criar o controller
criar um classe constroller
importar o controller no router

testar no postman se esta funcionando.
======================================

criar o service
criar a classe Service'''
importar o service no controller
declarar a funçao FindAll do service no controller e chamar ela no res.

testar no postman se esta funcinando.
=========================================
nao esquecer de colocar a tratatica de erro com Try catch no controller
=========================================

copiar e colar para criar mais funcoes no controller e service
depois é so criar as rotas no router e testar no postman.
=========================================
Criar o CRUD copiando e colando a primeira funcao
nao esquecer de criar as rotas no router.

testar todas as rotas no postman.
==========================================
Criar uma pasta models para colocar o array de nome.

copiar as funcoes do Service e editar colocando o array e os parametros.
===========================================

Volta pro controller e edita os parametros e as requisicoes das funcoes.

===========================================

voltar para o service






