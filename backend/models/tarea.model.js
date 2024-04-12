// backend/models/tarea.model.js
const mongoose = require('mongoose');

const TareaSchema = mongoose.Schema({
  //id: { type: String, required: true },
  nombre: String,
  completada: Boolean
});

// Define el nombre de la base de datos
const dbName = 'tareas';

// Define el nombre de la colección
const collectionName = 'tareas';

module.exports = mongoose.model('Tarea', TareaSchema, collectionName, "");
