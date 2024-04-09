const mongoose = require('mongoose');

// Definición del esquema para el modelo de tarea
const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Definición del modelo de tarea utilizando el esquema
const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
