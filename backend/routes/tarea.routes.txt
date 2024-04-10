// backend/routes/tarea.routes.js
const express = require('express');
const router = express.Router();
const Tarea = require('../models/tarea.model');

// Ruta para obtener todas las tareas

//router.get('/', async (req, res) => {
  /*
  try {
    const tareas = await Tarea.find();
    res.json(tareas);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});*/

/******* */
router.get('/', (req, res, next) => {
  Tarea.find()
     .then(documents => {
        res.status(200).json(documents);
     })
     .catch(error => {
        res.status(500).json({
           message: 'An error occurred',
           error: error
        });
     });
});
/******* */

// Ruta para crear una nueva tarea
router.post('/', async (req, res) => {
  const tarea = new Tarea({
    nombre: req.body.nombre,
    completada: req.body.completada
  });

  try {
    const tareaGuardada = await tarea.save();
    res.json(tareaGuardada);
  } catch (err) {
    res.json({ message: err });
  }
});

// Ruta para eliminar una tarea
router.delete('/:id', async (req, res) => {
  try {
    const tareaEliminada = await Tarea.remove({ _id: req.params.id });
    res.json(tareaEliminada);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
