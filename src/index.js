const express = require('express');
const app = express();
const { buscarColecao, buscarAno, buscarIPCAId } = require('./service/servicos');

/* Essa rota permite redenrizar toda a colecao e tambem consultar itens que tenham o mesmo ano na colecao */
app.get('/historicoIPCA', (req, res) => {
  const ipcaAno = parseInt(req.query.ano);

  const buscarIpcaAno = ipcaAno ? buscarAno(ipcaAno) : buscarColecao();

  res.json(buscarIpcaAno);
});

/* Essa rota permite consutar um item na colecao atraves do id */
app.get('/historicoIPCA/:idipca', (req, res) => {
  const idIpca = parseInt(req.params.idipca);

  const buscarIpcaId = buscarIPCAId(idIpca);

  res.json(buscarIpcaId);
});

app.listen(3000, () => {
  let data = new Date();
  console.log(`Servidor rodando na PORT 3000 e em execução desde: ${data.toLocaleString()}`);
});
