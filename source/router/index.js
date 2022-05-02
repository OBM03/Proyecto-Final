const express = require("express");
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Trabajando servidor");

});


router.get('/index',(req,res)=>{
    res.render('index.html',{titulo:'Index'})
});

router.get('/Quienessomos',(req,res)=>{
    res.render('Quienessomos.html',{titulo:'Quienessomos'})
});

router.get('/Servicios',(req,res)=>{
    res.render('Servicios.html',{titulo:'Servicios'})
});

router.get('/Beneficios',(req,res)=>{
    res.render('Beneficios.html',{titulo:'Beneficios'})
});

router.get('/Contactanos',(req,res)=>{
    res.render('Contactanos.html',{titulo:'Contactanos'})
});

router.get('*',(req,res)=>{
    res.send("No existe la pagina");
});

module.exports=router;