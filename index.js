require('dotenv').config()
const express = require('express');
const cors =require('cors');
const app = express();


app.use(cors());
app.use(express.json());

//mini base de datos de platillo

let platillos = [
    {
        "id":1,
        "nombre": "Tacos al pastor",
        "precio":10,
        "descripcion": "Ricos tacos al pastor",
    },
    {
        "id":2,
        "nombre": "Chilakiles",
        "precio":45.15,
        "descripcion": "Ricos Chilakiles",
    },
    {
        "id":3,
        "nombre": "Arepa",
        "precio":25,
        "descripcion": "Rica Arepa",
    },
    {
        "id":4,
        "nombre": "Bandeja Paisa",
        "precio":80,
        "descripcion": "Comida Colombiana",
    },
    {
        "id" : 5,
        "nombre": "Flautas",
        "precio":15,
        "descripcion": "Tortillas con carne o pollo",
    }
];


app.get("/",(req, res)=> {
    res.json("API Platillos V1.0")
});

app.get("/platillos",(req, res)=> {
    res.json({
        message: "respuesta correcta de platillos",
        data: platillos
    })
});

app.post("/platillos",(req, res)=> {
    let platillo = req.body;
    platillos.push(platillo);
    res.json({
        message: "el platillos de agrego correctamente",
        data: platillo
    })
});

app.listen(process.env.PORT, ()=>{
    console.log("Servidor iniciado en el puerto " + process.env.PORT);
});
