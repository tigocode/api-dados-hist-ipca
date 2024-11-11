const dadosIPCA =  require('../data/dados');

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
  
}

module.exports = {
  buscarColecao,
  buscarAno,
  buscarIPCAId
}
