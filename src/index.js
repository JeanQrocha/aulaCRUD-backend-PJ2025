import express from "express"
import router from "./router/users.js";

//declarando o express 
const app = express();
//dizendo que vai abrir com json.
app.use(express.json())

app.use("/api/v1", router)

//declarando a porta da api
const port = 3000

//ouvindo quando a porta for executada
app.listen(port, () => {
    console.info("Servidor rodando na porta "+port)
})