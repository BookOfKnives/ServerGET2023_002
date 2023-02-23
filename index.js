//1602 2023 forsøg to på Server
`use strict`

const express = require("express");
const app = express();
app.use(express.json());

const PORT = 8080;

let birds = [];

birds.push(
    {id:0, name:"Alexandrian Pineplume", region:"Anatolia"}, 
    {id:1, name:"Horsefly", region: "Georgia"},
    {id:2, name:"Neb Parrot", region: "Ganges"}
    );

let idNumber = 2;


app.get("/", (req, res) => {
    res.send("hello");
});

app.get("/birds", (req, res) => {
    res.send({Data: birds});
});

app.get("/birds/:id", (req, res) => {
    res.send({Data: birds[req.params.id]})
});

app.post("/birds/", (req, res) => {
    birds.push(req.body);
    idNumber++;
    birds[idNumber--][id] = idNumber;
    res.send({Data: birds[idNumber]});
});


app.listen(PORT, () => {
    console.log("Server running on port: ", PORT);
});