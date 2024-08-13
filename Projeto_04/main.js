function gerarNum() {
    let resposta = parseInt(prompt("Informe a opção selecionada: "));
    let numSorte = [];
    let listaNum = [];
    let numeroAleatorio;
    let min;
    let max;
    

    switch(resposta) {
        case 1:
            min = 1;
            max = 60;

            for(let i = 0; i < 6; i++) {
                numeroAleatorio = Math.random() * (max - min) + min;
                numSorte.push(parseInt(numeroAleatorio));
            }

            console.log(`Números da sorte gerados para a Megacena: ${numSorte}`);
            document.write(`<h2>Números da sorte</h2>`);
            document.write(`<h3>${numSorte}</h3>`);
            break;
        case 2:
            min = 1;
            max = 80;

            for(let i = min; i <= max; i++) {
                listaNum.push(i);
            }

            // Embaralhe os números usando o algoritmo Fisher-Yates
            for (let p = listaNumeros.length; p > 0; p--) {
                const n = Math.floor(Math.random() * p);
                const tmp = listaNumeros[n];
                listaNumeros[n] = listaNumeros[p - 1];
                listaNumeros[p - 1] = tmp;
            }

            // Pegue os primeiros 'quantidade' números da lista
            for (let i = 0; i < quantidade; i++) {
                numSorte.push(listaNumeros[i]);
}

console.log(numSorte); // Números aleatórios sem repetição

            for(let i = 0; i < 5; i++) {
                numeroAleatorio = Math.random() * (max - min) + min;
                numSorte.push(parseInt(numeroAleatorio));
            }

            console.log(`Números da sorte gerados para a Quina: ${numSorte}`);
            document.write(`<h2>Números da sorte</h2>`);
            document.write(`<h3>${numSorte}</h3>`);
            break;
        case 3:
            min = 1;
            max = 100;

            for(let i = 0; i < 50; i++) {
                numeroAleatorio = Math.random() * (max - min) + min;
                numSorte.push(parseInt(numeroAleatorio));
            }

            console.log(`Números da sorte gerados para a Lotomania: ${numSorte}`);
            document.write(`<h2>Números da sorte</h2>`);
            document.write(`<h3>${numSorte}</h3>`);
            break;
        default:
            alert("Opção inválida!");
    }
}