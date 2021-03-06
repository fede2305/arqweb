var reglas = {
    regla1: {
        sucursal: "Florida",
        ip_origen: "10.0.2.1",
        ip_destino: "192.168.223.40",
        id: 1
    },
    regla2: {
        sucursal: "Olleros",
        ip_origen: "192.168.2.1",
            ip_destino: "192.168.218.0/24",
        id: 2
    },
    regla3: {
        sucursal: "Olleros",
        ip_origen: "192.168.10.2",
        ip_destino: "10.10.10.2",
        id: 3
    },
    regla4: {
        sucursal: "Florida",
        ip_origen: "10.2.2.2",
        ip_destino: "172.11.54.2",
        id: 4
    }
}

var contador =5;

exports.create = function(req, res) {
    var newregla = req.body;
    //reglas["regla" + newregla.id] = newregla;
    newregla.id = contador;
    reglas["regla" + contador] = newregla;
    contador = contador + 1;
    console.log("---> Reglas:\n" + JSON.stringify(reglas, null, 4));
    res.end("Regla creada satisfactoriamente: \n" + JSON.stringify(newregla, null, 4));
};

exports.findAll = function(req, res) {
    console.log("--->Find All: \n" + JSON.stringify(reglas, null, 4));
    res.end("Todas las reglas: \n" + JSON.stringify(reglas, null, 4));
};

exports.findOne = function(req, res) {
    var regla = reglas["regla" + req.params.id];
    console.log("--->Buscar regla: \n" + JSON.stringify(regla, null, 4));
    res.end( "Buscar regla:\n" + JSON.stringify(regla, null, 4));
};

exports.update = function(req, res) {
    var id = parseInt(req.params.id);
    var updatedregla = req.body;
    if(reglas["regla" + id] != null){
        // update data
        reglas["regla" + id] = updatedregla;

        console.log("--->Actualización completada, reglas: \n" + JSON.stringify(reglas, null, 4))

        // return
        res.end("Actualización Completada! \n" + JSON.stringify(updatedregla, null, 4));
    }else{
        res.end("No existe la regla:\n:" + JSON.stringify(updatedregla, null, 4));
    }
};

exports.delete = function(req, res) {
    var deleteregla = reglas["regla" + req.params.id];
    delete reglas["regla" + req.params.id];
    console.log("--->Regla eliminada:\n" + JSON.stringify(reglas, null, 4) );
    res.end( "Regla eliminada: \n" + JSON.stringify(deleteregla, null, 4));
};