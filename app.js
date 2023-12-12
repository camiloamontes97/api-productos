var express = require("express")
 global.app = express()

var puerto = 3000; 


var bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extends:true}))


app.listen(puerto, function(){
    console.log("servidor funcionado por el puerto"  + puerto )
})

require("./routes.js")

var productos = [

    {codigo:1111,nombre:"vitaminaE" ,descripcion:"vitamina en capsula",precio:30.0000},
    {codigo:1111,nombre:"vitaminaD" ,descripcion:"vitamina d en capsula",precio:35.0000},
    {codigo:1111,nombre:"vitaminaA" ,descripcion:"vitamina A en  capsula",precio:40.0000},
    {codigo:1111,nombre:"colageno" ,descripcion:"colageno liquido",precio:45.0000},
    {codigo:1111,nombre:"magnesio" ,descripcion:"manegsio en pastillas",precio:50.0000},
    {codigo:1111,nombre:"vitaminaC" ,descripcion:"vitamina C liquida",precio:80.0000},
    {codigo:1111,nombre:"calcio" ,descripcion:"calcio en pasta",precio:20.0000}




]
