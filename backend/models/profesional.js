const mongoose = require('mongoose');

const profesionalSchema = new mongoose.Schema({
	rut: Number,
	clave: String,
	rol: Number,
	nombre: String,
	telefono: String,
	correo: String
});

module.exports = mongoose.model('Profesional', profesionalSchema);
