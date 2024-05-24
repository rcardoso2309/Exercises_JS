console.log("teste");

const object = {
  name: "Rafael",
  gender: "male",
  age: "38",
  teams: ["team1", "team2"],
  talk: function talk() {
    return "hello";
  },
};

console.log(object);
console.log(object.name);
console.log(object.teams);
console.log(object.teams[0]);
console.log(object.talk);
console.log(object.talk());
console.log(console);

function soma() {
  return 1 + 1;
}
console.log(soma); // shows the entire function
console.log(soma()); // shows the execution of the function

function sum(x, y) {
  return x + y;
}
console.log(sum(3, 4));
console.log(sum(1001, 78));
console.log(sum("Raf", "ael"));
