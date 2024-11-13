const dadosIPCA = require('../data/dados');

const buscarColecao = () => {
  return dadosIPCA;
}

const buscarAno = (ano) => {
  return dadosIPCA.filter(ipca => ipca.ano === ano);
}

const buscarIPCAId = (idIpca) => {
  return dadosIPCA.find(ipca => ipca.id === idIpca);
}

const calcularIPCA = (ObjetoParams) => {
  const ipcaFiltrado = dadosIPCA.filter(ipca => (ipca.mes >= ObjetoParams.mesInicial && ipca.ano >= ObjetoParams.anoInicial) && (ipca.mes <= ObjetoParams.mesFinal && ipca.ano <= ObjetoParams.anoFinal));



  let resultado = ObjetoParams.valor;
  for (let ipcaValor of ipcaFiltrado) {
    resultado = resultado * (1 + (ipcaValor.ipca / ObjetoParams.valor))
    console.log(`Id: ${ipcaValor.id}, Valor: ${resultado}`)
  }  

  return resultado.toFixed(2);
}

module.exports = {
  buscarColecao,
  buscarAno,
  buscarIPCAId,
  calcularIPCA
}
