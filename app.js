const express = require("express")

const app = express()

app.listen(8081, function(){
    console.log("Servidor Ativo! :)")
})

app.get("/", function(req, res){
    res.end("Node JS")
})

app.get("/cadastrar/:produto", function(req, res){
    res.end("Produto: "+req.params.produto)
})

app.get("/pesquisar/:produto/:modelo", function(req, res){
    res.end(" Pesquisa do produto: "+req.params.produto+"\n |Modelo: "+req.params.modelo)
})

app.get("/contato/:sac/:produto", function(req, res){
    res.end(" Pagina de Contato com: "+req.params.sac+"\n |Produto: "+req.params.produto)
})

app.get("/funcionarios/:nome/:cargo/:telefone/:salario", function(req, res){
    res.end(" Pagina de Contato com: "+req.params.nome+"\n |Cargo: "+req.params.cargo+"\n |Telefone: "+req.params.telefone+"\n |Salario: "+req.params.urgencia)
})

app.get("/visualizar", function(req, res){
    res.end("Visualizar Dados")
})

app.get("/deletar", function(req, res){
    res.end("Deletar Dados")
})



