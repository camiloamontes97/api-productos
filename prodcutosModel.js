var productosModel = {}

var productos = [

    {codigo:1111,nombre:"vitaminaE" ,descripcion:"vitamina en capsula",precio:30.0000},
    {codigo:1112,nombre:"vitaminaD" ,descripcion:"vitamina d en capsula",precio:35.0000},
    {codigo:1113,nombre:"vitaminaA" ,descripcion:"vitamina A en  capsula",precio:40.0000},
    {codigo:1114,nombre:"colageno" ,descripcion:"colageno liquido",precio:45.0000},
    {codigo:1115,nombre:"magnesio" ,descripcion:"manegsio en pastillas",precio:50.0000},
    {codigo:1116,nombre:"vitaminaC" ,descripcion:"vitamina C liquida",precio:80.0000},
    {codigo:1117,nombre:"calcio" ,descripcion:"calcio en pasta",precio:20.0000}




]

var listacodigo = [
    {codigo: 1111},
    {codigo: 1112},
    {codigo: 1113},
    {codigo: 1114},
    {codigo: 1115},
    {codigo: 1116},
    {codigo: 1117}
]


productosModel.Guardar = function (post, callback){

    productos.push({codigo: post.codigo, nombre:post.nombre,descripcion:post.descripcion})
    return callback({state:true,mensaje:"se almaceno el producto correctamente"})

}

productosModel.listar = function(post, callback){
    return callback(productos)
}

productosModel.listarCodigo = function(post, callback){
    return callback(listacodigo)
}



productosModel.modificar = function (post, callback){
    var posicion = productos.findIndex((item) => item.codigo == post.codigo)

    if(posicion== -1){
        callback({status:false,mensaje:"este codigo no se encuentra dentro de los datos"})
        
    }
    else{
        productos[posicion].descripcion = post.descripcion
        productos[posicion].nombre = post.nombre
        productos[posicion].precio = post.precio
        callback({state:true,mensaje:"se actualizar el registro "})
    }
}

productosModel.eliminar = function(post, callback){
    var posicion = productos.findIndex((item) => item.codigo == post.codigo)
    if(posicion == -1){
        callback({state:false,mensaje:"este codigo  no existe , no se puede eliminar "})
        
    }
    else{
        productos.splice(posicion,1)
        callback({state:true,mensaje:"se elimino correctamente "})

    }
}

module.exports.productosModel = productosModel

