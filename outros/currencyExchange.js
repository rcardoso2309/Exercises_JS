console.log("test");

function converterMoeda(valor, taxaCambio) {
  /**
   * Função para converter um valor em uma moeda para outra moeda usando uma taxa de câmbio.
   *
   * @param {number} valor - O valor a ser convertido.
   * @param {number} taxaCambio - A taxa de câmbio para a conversão.
   * @returns {number} - O valor convertido para a nova moeda.
   */
  return valor * taxaCambio;
}

// Exemplo de uso da função
var valorEmEuro = 100;
var taxaCambioRealParaEuro = 6.1;

var valorEmReal = converterMoeda(valorEmEuro, taxaCambioRealParaEuro);
console.log("R$ " + valorEmReal.toFixed(2));

/*
Crie uma funcao que recebe um valor em uka moeda ea taxa de cambio, 
e retorna o valor conbertido para outra moeda
*/
