function dados() {
    let peso = parseFloat(prompt("Informe seu peso: "));
    let altura = parseFloat(prompt("Informe sua altura: "));

    let imc = peso / (altura * altura);

    document.write(`<h2>Seu IMC é: ${imc.toFixed(2)}`);
}