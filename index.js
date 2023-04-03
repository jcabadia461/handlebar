// Carga los módulos necesarios
import express from 'express';
import exphbs from 'express-handlebars';

// Crea una instancia de Express
const app = express();

// Configura Handlebars como motor de plantillas
const hbs = exphbs.create({
  defaultLayout: "main",
  layoutsDir: "views",
  // partialsDir: join(app.get("views"), "partials"),
  extname: ".hbs",
});
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

// Define una ruta que renderiza una vista
app.get('/', function (req, res) {
    res.render('index', { title: 'Este es el título de mi página de prueba', name: 'Juan Carlos' });
});

app.get('/dos', function (req, res) {
  res.render('hola2', { texto: 'esto es un texto dentro de la plantilla hola.hbs'});
});

app.get('/dos/tres/:id', function (req, res) {
  const { id } = req.params;
  res.render('hola', { texto: 'esto es un texto dentro de la plantilla hola.hbs', var2: `el parámetro es ${id}`});
});

// Inicia el servidor
app.listen(4000, function () {
  console.log('HOLA');
    console.log('La aplicación está corriendo en http://localhost:4000/');
});
