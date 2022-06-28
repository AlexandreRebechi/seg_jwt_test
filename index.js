const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

const ola = (request, response, next) => {
    response.status(200).json("Seja bem vindo a Segurança com JWT")
}

const dados = (request, response, next) => {
    const lista = [{ id: 1, nome: 'luiz' }, { id: 2, nome: 'jorge' }]
    response.status(200).json(lista)
}
const login = (request, response,next) =>{
    if(request.body.user ==='alexandre' && request.body.password ==='123'){
        //acertou usuario e senha
        const id =1; // esse id viria do banco de dados
        const email ="alexandrerbc@gamil.com"
        const roles = [{"role":"user"},{"role":"admin"}]
        const token = jwt.sign({id, email, roles},process.env.SECRET, {
                expiresIn: 300 //expira em 5 minutos

    });
    return response.json({auth: true, token : token});

}
    request.status(500).json({message: 'Login inválido!'});
}

app
    .route("/ola")
    .get(ola)

app
    .route("/dados")
    .get(dados)

app.listen(3000, () => {
    console.log("Servidor rodando.....")
}) 