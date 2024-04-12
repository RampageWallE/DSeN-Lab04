const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())
app.use(express.json());
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    const profesor = {
        nombre: "Profesor bobadilla"
    } 
    res.render('index', profesor)
});

app.post('/clientes', (req, res) => {
    const clientes = req.body;
    console.log(clientes);
    res.render('clientes', clientes);   
})

app.post('/productos', (req, res) => {
    const productos = req.body;
    console.log(productos);
    res.render('productos', productos);
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});