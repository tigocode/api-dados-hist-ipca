const express = require('express');
const app = express();
const dadosIPCA =  require('./data/dados');

app.get('/historicoIPCA', (req, res) => {
  res.json(dadosIPCA);
});
app.get('/historicoIPCA/:idipca', (req, res) => {
  const idIpca = parseInt(req.params.idipca);

  const buscarIpcaId = dadosIPCA.find(ipca => ipca.id === idIpca);

  res.json(buscarIpcaId);
});
app.get('/historicoIPCA/', (req, res) => {
  const idIpca = parseInt(req.params.idipca);

  const buscarIpcaId = dadosIPCA.find(ipca => ipca.id === idIpca);

  res.json(buscarIpcaId);
});

app.listen(3000, () => {
  let data = new Date();
  console.log(`Servidor rodando na PORT 3000 e em execução desde: ${data.toLocaleString()}`);
});
