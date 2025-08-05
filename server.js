import express from 'express'

const app = express()

app.use(express.json())

const usuarios = []

//criar as rotas da API
app.get('/cadastro', (req, res) => {
    //res.send('FUNFOU O GET!!!!!!')
    //res.json(usuarios)
    res.status(200).json(usuarios)
})

app.post('/cadastro', (req, res) => {
    //console.log(req.body)
    usuarios.push(req.body)
    //res.send('FUNFOU O POST!!!!!!')
    res.status(201).json(req.body)
})



//configurar porta do servidor 

app.listen(3000, () => {
    console.log('Servidor funfando!!!!!')
})



//como testar as rotas? thunderclient, postman, insomnia, swagger***, etc
//***o melhor 