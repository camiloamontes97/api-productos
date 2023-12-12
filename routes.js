

const {productosModel} = require("./prodcutosModel.js")

var productosController = require("./productosController.js").productosController

app.post("/productos/Guardar",function(request,response){

    productosController.Guardar(request,response)
        })

       
 app.post("/productos/listar",function(request,response){
    
            productosController.listar(request,response)
          
        })
        

 app.post("/productos/modificar",function(request,response){
            productosController.modificar(request,response)
           
        
        })
      

  app.post("/productos/eliminar",function(request,response){
            productosController.eliminar(request,response)
    
           })
    