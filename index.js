const express = require("express");
const app = express();

app.use(express.json());
let personajes = [
  {
    id: 1,
    name: "Peter Parker",
    nameSuper: "Spiderman",
    edad: 15,
    poderes: [
      "Fuerza",
      "Velocidad",
      "Durabilidad",
      "Agilidad",
      "Sentidos",
      "Reflejos",
    ],
  },

  {
    id: 2,
    name: "Steve Rogers",
    nameSuper: "Capitan America",
    edad: 175,
    poderes: [
      "Curación y Regeneración Acelerada",
      "Velocidad",
      "Durabilidad",
      "Agilidad",
      "Sentidos",
    ],
  },

  {
    id: 3,
    name: "Tony Stark",
    nameSuper: "Iron Man",
    edad: 53,
    poderes: [
      "Fuerza Sobrehumana",
      "Durabilidad",
      "Vuelo supersónico",
      "Regenerativo Soporte Vital.",
    ],
  },
];

// const app = http.createServer((request, response) => {
//   response.writeHead(200, { "Content-Type": "application/json" });
//   response.end(JSON.stringify(personajes));
// });

app.get("/", (request, response) => {
  response.send("<h1>Hola NodeJS</h1>");
});

app.get('/api/personajes', (request, response) => {
    response.json(personajes)
})

app.get('/api/personajes/:id', (request, response) => {
    const id = Number(request.params.id);
    const personaje = personajes.find(personaje => personaje.id === id);
    personaje ? response.json(personaje) : response.status(404).end();
})

app.post('/api/personajes', (request, response) => {
    const personaje = request.body
    console.log(personaje)

    response.json(personaje)
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Mi primer servidor en NodeJS ${PORT}`)
})