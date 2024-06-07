// Criar uma funcao para calcular o IMC (Indice de Massa Corporal)
// divide-se o peso do paciente pela sua altura elevada ao quadrado. Diz-se que o indivíduo tem peso normal quando o resultado do IMC está entre 18,5 e 24,9.

function imc(peso, altura) {
  return peso / (altura * altura);
}

console.log(imc(50, 1.70));
console.log(imc(75, 1.95));

const name = "Rafael";

const IMC = (peso, altura) => {
  //arrow function or anonymmus function
  const surname = "Cardoso";
  console.log(name);
  return peso / (altura * altura);
};
console.log(IMC(65, 1.75));
const surname = "Yamamoto";
console.log(surname);

// - Crie uma função para contar a quantidade de caracteres de um texto. A função deve receber o nome e sobrenome e retornar como resultado a soma desses valores. Considere que a função deve receber as opções abaixo:
// 	- Entrada 1) nome = "Victor" e sobrenome = "Yamashiro"
// 	- Entrada 2) nome = "Gabriel" e sobrenome = "Oliveira"
// 	- Entrada 3) nome = "Erica" e sobrenome = "Okinawa"

function contador(nome, sobreNome) {
  const nomeCompleto = nome + " " + sobreNome
  return nomeCompleto.length;
}

console.log(contador("Victor", "Yamashiro"));
console.log(contador("Gabriel", "Oliveira"))
console.log(contador("Erica", "Okinawa"))
