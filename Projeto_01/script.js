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

// let greenting = document.getElementById("greenting");
// console.log(greenting);

// function login() {
//     console.log("Clicou no botão!");

//     let username = prompt("Entre com seu nome: ");

//     if(username === "" || username === null) {
//         alert("O nome não pode ser vazio ou nulo");
//     } else {
//         greenting.innerHTML = `Bem vindo ${username} `;

//         let logoutBtn = document.createElement("button");
//         logoutBtn.innerText = "Fazer logout";
//         logoutBtn.click(logout(username));

//         greenting.appendChild(logoutBtn);
//     }
// }

// function logout(name) {
//     console.log("Clicou no botão de logout!");

//     alert("Você fez o logout");
//     greenting.innerHTML = "Até logo " + name;
// }

let list = ["Lucas", "Gabriel", "Pedro", "José"]; // Array
list[2] = "Nathália"; // Trocando elemento do Array
console.log(list);
list.push("Giovanna"); // Adicionando elemento no Array
console.log(list);
list.shift(); // Removendo primeiro elemento no Array
list.pop(); // Removendo último elemento do Array
console.log(list);
console.log(list.join("-")); // Transformando Array em String separada por ifen
console.log(list.toString()); // Transformar Array em String

let homem = ["homem1", "homem2", "homem3"];
let mulher = ["mulher1", "mulher2", "mulher3"];

console.log(homem.concat(mulher));

let month = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"];
console.log(month.length);

// while(i < month.length) {
//     console.log(month[i]);
//     document.write(`<p>${month[i]}</p>`);
//     i++;
// }

// for(let i = 0; i < month.length; i++) {
//     console.log(month[i]);
//     document.write(`<p>${month[i]}</p>`);
// }

function escolher() {
    let resposta = parseInt(prompt("Informe sua escolha: "));
    console.log(typeof resposta);

    switch(resposta) {
        case 1: 
            alert("Você escolheu a opção 1");
            break;
        case 2:
            alert("Você escolheu a opção 2");
            break;
        case 3:
            alert("Você escolheu a opção 3");
            break;
        case 4: 
            alert("Você escolheu a opção 4");
            break;
        case 5: 
            alert("Você escolheu a opção 5");
            break;
        default:
            alert("Opção inválida!");
    }
}