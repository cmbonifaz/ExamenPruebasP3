import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("Examen Christian Bonifaz Integracion Continua");
});

app.listen(port, () => {
  console.log(`Servidor trabajando en el puerto ${port}`);
});