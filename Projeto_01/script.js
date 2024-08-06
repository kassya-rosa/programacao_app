// let name = prompt("Informe o nome: ");
// let age = prompt("Informe a idade: ");

// console.log("Nome: " + name + " Idade: " + age);
// alert("Nome: " + name + " Idade: " + age);


// // Exercício 01

// let n1 = parseFloat(prompt("Informe a nota 1º: "));
// let n2 = parseFloat(prompt("Informe a nota 2º: "));
// let n3 = parseFloat(prompt("Informe a nota 3º: "));
// let n4 = parseFloat(prompt("Informe a nota 4º: "));

// let media = (n1 + n2 + n3 + n4) / 4;
// alert("Media do aluno: " + media.toFixed(2));

// let name = prompt("Informe o nome: ")
// let matricula = prompt("Informe a matricula: ");
// let curso = prompt("Informe o curso");

// document.write(`<h1>Bem vindo ${name} de matricula ${matricula} do curso ${curso}</h1>`);
// document.write(`<img src="https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2022/11/10221117/5-214.jpg" alt="Img" />`)

let greenting = document.getElementById("greenting");
console.log(greenting);

function login() {
    console.log("Clicou no botão!");

    let username = prompt("Entre com seu nome: ");

    if(username === "" || username === null) {
        alert("O nome não pode ser vazio ou nulo");
    } else {
        greenting.innerHTML = `Bem vindo ${username}`;
    }
}