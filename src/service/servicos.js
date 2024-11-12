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
  let teste = '';
  for (let ipca of dadosIPCA) {
    teste = ipca.mes >= ObjetoParams.mesInicial && ipca.mes <= ObjetoParams.mesFinal;
    console.log(teste);
  }

 /*  return resultado; */
}

module.exports = {
  buscarColecao,
  buscarAno,
  buscarIPCAId,
  calcularIPCA
}
