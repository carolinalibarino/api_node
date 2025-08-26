import express from 'express'

import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const app = express()

app.use(express.json())

const usuarios = []

//criar as rotas da API
app.get('/cadastro', async (req, res) => {
    //res.send('FUNFOU O GET!!!!!!')
    //res.json(usuarios)
    const lista_usuarios = await prisma.usuario.findMany()
    res.status(200).json(lista_usuarios)
})

app.post('/cadastro', async (req, res) => {
    //console.log(req.body)
    //usuarios.push(req.body)
    //res.send('FUNFOU O POST!!!!!!')
    await prisma.usuario.create({
        data: {
            nome: req.body.nome,
            email: req.body.email,
            idade: req.body.idade
        }
    })
    res.status(201).json(req.body)
})

app.put('/cadastro/:id', async (req, res) => {
    //res.send('FUNFOU O PUT!!!!!!')
    //console.log(req.params.id)
    await prisma.usuario.update({
        where: { id:req.params.id },
        data: {
            nome: req.body.nome,
            email: req.body.email,
            idade: req.body.idade
        }
    })
    res.status(200).json({"msg": "Usuário atualizado com sucesso!"})
})

app.delete('/cadastro/:id', async (req, res) => {
    //res.send('FUNFOU O DELETE!!!!!!')
    await prisma.usuario.delete({
        where: { id:req.params.id }
    })
    res.status(200).json({"msg": "Usuário deletado com sucesso!"})
})



//configurar porta do servidor 

app.listen(3000, () => {
    console.log('Servidor funfando!!!!!')
})



//como testar as rotas? thunderclient, postman, insomnia, swagger***, etc
//***o melhor 