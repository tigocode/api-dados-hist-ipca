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

/* Essa rota permite os parametros {valor, mesInicial, anoInicial, mesFinal, anoFinal} para que posteriormente seja calculado o valor do IPCA referente ao periodo informado do usuario */
app.get('/historicoIPCACalculo', (req, res) => {
  const { valor, mesInicial, anoInicial, mesFinal, anoFinal } = req.query;
  const ObjetoParams = {
    valor: parseInt(valor),
    mesInicial: parseInt(mesInicial),
    anoInicial: parseInt(anoInicial),
    mesFinal: parseInt(mesFinal),
    anoFinal: parseInt(anoFinal),
  }

  res.json(ObjetoParams)
});

app.listen(3000, () => {
  let data = new Date();
  console.log(`Servidor rodando na PORT 3000 e em execução desde: ${data.toLocaleString()}`);
});
