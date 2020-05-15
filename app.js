//Variables
//const são constantes que serão utilizadas em todo o projeto, é visto abaixo a declaração no projeto as biblioteas instaladas
const express=require('express');
const bodyParser=require('body-parser');
const mysql=require('mysql');
const handlebars=require('express-handlebars');
const app=express(); //app recebe a const express e chama o metodo express   

//Template engine
app.engine("handlebars", handlebars({defaultLayout:'main'}));
app.set('view engine','handlebars');

//Routes and Templates
app.get("/:id?", function(req,res){         //"/:id indica que é preciso passaar um parametro na prorpia url, ao colocar o ? na frente do id, o parametro se torna opcional"
//res.send("Essa é minha pagina inicial!");     //teste de mode simples
//res.sendFile(__dirname+"/index.html"); //__dirname passa o caminho absoluto do site, teste utilizando HTM
res.render('index',{id:req.params.id});        //o sistema esta capturando o parametro da url, e em seguida direcionando para o index, o backend esta passando o parametro para o front
console.log(req.params.id);    //(req.params.id)é uma forma de pegar o parametro passado na url
});

//Start server
//3000 é a porta que o servidor será instalado. foi aberto uma function normalmente tem a REQuisição e a RESposta
app.listen(3000,function(req,res){     
console.log('Servidor está rodando'); //msg  avisa que o servidor ta ON
});
    
