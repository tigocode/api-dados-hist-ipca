const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({messagem: 'Olá mundo!'});
});

app.listen(3000, () => {
  let data = new Date();
  console.log(`Servidor rodando na PORT 3000 e em execução desde: ${data.toLocaleString()}`);
});
