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
 criar pasta 
   src
        controller
            users.js
        router
            users.js
        service
            users.js
        index.js

 criar os arquivos .js dentro de cada pasta com seus respequitivos nomes
=================================
comecar a construir os arquivo index.js

importar o express, 
declarar o express
dzer que vai rodar com json,

import express from "express"
 
    const app = express();
    app.use(express.json())
 
    //rotas
 
    const port = 3000
 
    app.listen(port, () => {
    console.info("Servidor rodando na porta " + port)
    })

testar
npm run dev
==================================
constrir as rotas

import express from 'express'
    //importar controller
 
    const router = express.Router()
 
    //api/v1
    router.get('/users', (req, res) => {
    console.log('oi')     //apenas para testar se a rota esta funcionando
    res.send()
    }) //pegar todos
    // router.get('/user/:index') //pegar um
    // router.post('/user') //cadastrar um
    // router.put('/user/:index') //alterar um
    // router.delete('/user/:index') //deletar um
 
    export default router

**nao esquecer de exportar o router no index**


tesar com o postman se esta funcionando.
=====================================

criar o controller
criar um classe constroller


  class ControllerUser {
   
    FindAll(req, res) {
    console.log("oi");
    res.send();
     }
    }
    export default new ControllerUser();

testar no postman se esta funcionando.
*nao esquecer de importar o controller no router*
======================================

criar o service
criar a classe Service'''

class ServiceUser {
    FindAll() {
        return ['oi', 'xau'] //apenas para teste, retorna array
    }
    }
    export default new ServiceUser()

**nao de esquecer de importar o service no controller**
declarar a funçao FindAll do service no controller e chamar ela no res.

testar no postman se esta funcinando.
=========================================
nao esquecer de colocar a tratatica de erro com Try catch no controller
=========================================

copiar e colar para criar mais funcoes no controller e service
depois é so criar as rotas no router e testar no postman.
=========================================
Criar o CRUD copiando e colando a primeira funcao


class ServiceUser {
    FindAll() {
    return ["oi", "xau"]; //apenas para teste, retorna array
  }
 
  FindOne() {
    return ["outra msg"]; //apenas para teste, retorna array
  }
  Create() {
    return ["Criado"]; //apenas para teste, retorna array
  }
  Update() {
    return ["Update"]; //apenas para teste, retorna array
  }
  Delete() {
    return ["Deletado"]; //apenas para teste, retorna array
  }
}
export default new ServiceUser();

**nao esquecer de criar as rotas no router.**
testar todas as rotas no postman.
==========================================
Criar uma pasta models para colocar o array de nome.

copiar as funcoes do Service e editar colocando o array e os parametros.

const nomes = new Array("Jão", "Marya", "Xuxa");
 
class ModelUser {
 
  FindAll() {
    return nomes
  }
 
  FindOne(index) { // se nao tem variavel dentro da função,entao é parametro, coloca dentro
    return nomes[index]
  }
  Create(nome) {
    nomes.push(nome)
  }
  Update(index, nome) {
    nomes[index] = nome
  }
  Delete(index) {
    nomes.splice(index, 1)
  }
}
 
export default new ModelUser()

===========================================

Volta pro controller e edita os parametros e as requisicoes das funcoes.

import ServiceUser from "../service/users.js";
 
class ControllerUser {
  FindAll(_, res) { //se nao for usar o primeiro parametro, use '_'
    try {
      const resultado = ServiceUser.FindAll();
 
      res.send(resultado);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
 
  FindOne(req, res) {
    try {
      const index = req.params.index
 
      const resultado = ServiceUser.FindOne(index);
 
      res.send(resultado);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
  Create(req, res) {
    try {
      const nome = req.body.nome   //post e put usa body
      const resultado = ServiceUser.Create(nome);
 
      res.send(resultado);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
  Update(req, res) {
    try {
      const index = req.params.index
      const nome = req.body.nome
      const resultado = ServiceUser.Update(index, nome);
 
      res.send(resultado);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
  Delete(req, res) {
    try {
      const index = req.params.index
      const resultado = ServiceUser.Delete(index);
 
      res.send(resultado);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
}
export default new ControllerUser();

===========================================

voltar para o service 

import ModelUser from '../model/users.js'
 
class ServiceUser {
  FindAll() {
    return ModelUser.FindAll()
  }
 
  FindOne(index) {
    //verificar se o index é valido
    return ModelUser.FindOne(index)
  }
  Create(nome) {
    return ModelUser.Create(nome)
  }
  Update(index, nome) {
    //verificar se o index e o nome são validos
    return ModelUser.Update(index, nome)
  }
  Delete(index) {
    return ModelUser.Delete(index)
  }
}
export default new ServiceUser();


=====================================

volte para o controller 

import ServiceUser from "../service/users.js";
 
class ControllerUser {
  FindAll(_, res) { //se nao for usar o primeiro parametro, use '_'
    try {
      const nomes = ServiceUser.FindAll();
 
      res.send({nomes});
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
 
  FindOne(req, res) {
    try {
      const index = req.params.index
 
      const nome = ServiceUser.FindOne(index);
 
      res.send({nome});
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
  Create(req, res) {
    try {
      const nome = req.body.nome   //post e put usa body
      ServiceUser.Create(nome);
 
      res.status(201).send();
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
  Update(req, res) {
    try {
      const index = req.params.index
      const nome = req.body.nome
      ServiceUser.Update(index, nome);
 
      res.status(200).send();
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
  Delete(req, res) {
    try {
      const index = req.params.index
      ServiceUser.Delete(index);
 
      res.status(204).send();
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
}
export default new ControllerUser();






