// backend/models/tarea.model.js
const mongoose = require('mongoose');

const TareaSchema = mongoose.Schema({
  //id: { type: String, required: true },
  nombre: { type: String, required: true },
  completada: { type: Boolean, required: true }
});

// Define el nombre de la base de datos
const dbName = 'listaDeTareas';

// Define el nombre de la colección
const collectionName = 'tarea';

module.exports = mongoose.model('Tarea', TareaSchema, collectionName, "");
