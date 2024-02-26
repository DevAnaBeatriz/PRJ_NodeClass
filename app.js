const express = require("express")

const app = express()

app.listen(8081, function(){
    console.log("Servidor Ativo! :)")
})

app.get("/", function(req, res){
    res.end("Node JS")
})

app.get("/cadastrar/:item", function(req, res){
    res.end(req.params.item)
})

app.get("/contato/:nome/:cargo/:telefone/:urgencia", function(req, res){
    res.end(" Pagina de Contato com: "+req.params.nome+"\n |Cargo: "+req.params.cargo+"\n |Telefone: "+req.params.telefone+"\n |Urgência: "+req.params.urgencia)
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


