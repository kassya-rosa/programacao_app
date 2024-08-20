function gerarNum() {
    let resposta = parseInt(prompt("Informe a opção selecionada: "));
    let numSorte = [];
    let listaNum = [];
    let numeroAleatorio;
    let indexAleat;
    let numero;
    

    switch(resposta) {
        case 1:
            listaNum = Array.from({ length: 60 }, (_, i) => i + 1);
            console.log("Array gerado: ", listaNum);
        
            for(let i = 0; i < 6; i++) {
                indexAleat = Math.floor(Math.random() * listaNum.length);
                numero = listaNum.splice(indexAleat, 1)[0];
                numSorte.push(numero);
            }

            console.log(`Números da sorte gerados para a Megacena: ${numSorte}`);
            document.write(`<h2>Números da sorte</h2>`);
            document.write(`<h3>Números da sorte da Megacena: ${numSorte}</h3>`);
            break;
        case 2:
            listaNum = Array.from({ length: 80 }, (_, i) => i + 1);
            console.log("Array gerado: ", listaNum);
        
            for(let i = 0; i < 5; i++) {
                indexAleat = Math.floor(Math.random() * listaNum.length);
                numero = listaNum.splice(indexAleat, 1)[0];
                numSorte.push(numero);
            }

            console.log(`Números da sorte gerados para a Megacena: ${numSorte}`);
            document.write(`<h2>Números da sorte</h2>`);
            document.write(`<h3>Números da sorte da Quina: ${numSorte}</h3>`);
            break;
        case 3:
            listaNum = Array.from({ length: 100 }, (_, i) => i + 1);
            console.log("Array gerado: ", listaNum);
        
            for(let i = 0; i < 50; i++) {
                indexAleat = Math.floor(Math.random() * listaNum.length);
                numero = listaNum.splice(indexAleat, 1)[0];
                numSorte.push(numero);
            }

            console.log(`Números da sorte gerados para a Megacena: ${numSorte}`);
            document.write(`<h2>Números da sorte</h2>`);
            document.write(`<h3>Números da sorte da Quina: ${numSorte}</h3>`);
            break;
        default:
            alert("Opção inválida!");
    }
}