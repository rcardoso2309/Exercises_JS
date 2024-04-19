console.log('test')
const cars = ["Audi","mercedes","BMW","Opel","VW"]

console.log(cars)
console.log(cars[0])
console.log(cars[1])
console.log(cars[2])

cars.push("Ford") // add string na Ultima posicao
console.log(cars)

delete cars[0] // deletar de acordo com o index informado
console.log(cars)

cars[1] = "Tesla" //Alterar elemento de acordo com o index informado
console.log(cars)

cars.splice(3,0,"volvo","Honda") // add a partir da posicao informada
console.log(cars);

cars.splice(3,2) // remover a partir da posicao informada e quantidade de elementos desejados
console.log(cars);

console.log(cars.length); // Informar quantidade de elementos no Array

const secondLast = cars.length - 2
cars.splice(secondLast, 1) // remover o penultimo elemento

cars.push("Skoda")
cars.push("chevrolet")
cars.splice(cars.length -1);
console.log(cars);



