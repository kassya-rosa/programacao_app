function imprimir() {
    document.write("<p>counter</p>");
}

// setInterval(() => {
//     document.write("<p>counter<p>");
// }, 1000);

// let counter = document.getElementById("contador");
// let myTimer = setInterval(() => {
//     counter.innerHTML += "Hello <br>"
// }, 1000);

// function stopTimer() {
//     clearInterval(myTimer);
// }

// setTimeout(imprimir, 4000);

// setTimeout(() => {
//     console.log("Time");
// }, 4000);

// let nome = "Lucas";

// if(nome === "Lucas") {
//     let profissao = "professor";
//     console.log(profissao);
// }

// if(nome === "Lucas") {
//     let cargo = "CEO";
//     console.log(cargo);
// }

// if(nome === "Lucas") {
//     const cargos = "ceoS"
//     console.log(cargos);
// }

// const sobrenome = "Sobrenome";

let pessoa = {
    nome: "Lucas Gabriel",
    cargo: "CEO Apple",
    idade: 21
}
console.log(pessoa);

let impar = [1, 3, 5, 7, 9];
let numeros = [...impar, 2, 4, 6, 8];
console.log(numeros);

function generatorNum(...num) {
    let arrayNum = num;
    let numAleat = Math.floor(Math.random() * arrayNum.length);
    console.log(arrayNum[numAleat]);
    return numAleat;
}

console.log(generatorNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));