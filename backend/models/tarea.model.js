// backend/models/tarea.model.js
const mongoose = require('mongoose');

const TareaSchema = mongoose.Schema({
  id: { type: String, required: true },
  nombre: { type: String, required: true },
  completada: { type: Boolean, required: true }
});

module.exports = mongoose.model('Tarea', TareaSchema);
