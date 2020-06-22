module.exports = function(app) {

    var reglas = require('./reglas.controller.js');

    // Create a new Customer
    app.post('/api/reglas', reglas.create);

    // Retrieve all Customer
    app.get('/api/reglas', reglas.findAll);

    // Retrieve a single Customer by Id
    app.get('/api/reglas/:id', reglas.findOne);

    // Update a Customer with Id
    app.put('/api/reglas/:id', reglas.update);

    // Delete a Customer with Id
    app.delete('/api/reglas/:id', reglas.delete);
}