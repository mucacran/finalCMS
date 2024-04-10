const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Tarea = require("./models/tarea.model");

//const tareaRoutes = require('./routes/tarea.routes');
//app.use('/tareas', tareaRoutes);

const app = express();
mongoose
  .connect("mongodb+srv://elmucacranrasta:vH2U5G8HO1OS1oai@cluster0.ef68u9l.mongodb.net/")
  .then(() => {
    console.log("se ha conectado a la base de datos");
  })
  .catch((error) => {
    console.log("Conección fallida ahora: " + error);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});
// xxHMoTqkdyeTe2yf
app.post("/api/posts", (req, res, next) => {
  const tarea = new Tarea({
    title: req.body.nombre,
    content: req.body.completada,
  });

  post.save().then((createdTarea) => {
    //console.log(createdTarea);
    res.status(201).json({
      message: "Tarea añadida satisfactoriamente",
      postId: createdTarea._id,
    });
  });
});

app.get("/api/posts", (req, res, next) => {
  Tarea.find()
    .then((tarea) => {
      console.log(tarea); // Aquí obtienes los documentos recuperados de la base de datos
      res.status(200).json({
        message: "tarea fetched successfully!",
        posts: tarea,
      });
    })
    .catch((error) => {
      console.error("Error al recuperar los tareas:", error);
    });
});

app.delete("/api/posts/:id", (req, res, next) => {
  Tarea.deleteOne({ _id: req.params.id }).then((result) => {
    console.log(result);
    res.status(200).json({
      message: "Post eliminado o borrado",
    });
  });
});

module.exports = app;
