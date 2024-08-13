function transformarTemp() { 
    let resposta = prompt("Informe a temperatura e a unidade. E informe para qual unidade deseja converter: ");
    console.log(resposta);
    let temperatura = parseFloat(resposta.split(" ")[0]);
    let unidade = resposta.split(" ")[1].toUpperCase();
    let unidadeCon = resposta.split(" ")[2].toUpperCase();
    console.log(temperatura);
    let transformacao;


    switch(unidade) {
        case "C":
            switch(unidadeCon) {
                case "F":
                    transformacao = (temperatura * 1.8) + 32;
                    document.write(`A temperatura informada ${temperatura}${unidade}° foi convertida para ${transformacao}${unidadeCon}°`);
                    break;
                case "K":
                    transformacao = temperatura + 273.15;
                    document.write(`A temperatura informada ${temperatura}${unidade}° foi convertida para ${transformacao}${unidadeCon}°`);
                    break;
            }
            break;
        case "F":
            switch(unidade) {
                case "C":
                    transformacao = (temperatura - 32) / 1.8;
                    document.write(`A temperatura informada ${temperatura}${unidade}° foi convertida para ${transformacao}${unidadeCon}°`);
                    break;
                case "K":
                    transformacao = ((temperatura - 32) / 1.8) + 273.15;
                    document.write(`A temperatura informada ${temperatura}${unidade}° foi convertida para ${transformacao}${unidadeCon}°`);
                    break;
            }
            break;
        case "K":
            switch(unidade) {
                case "C":
                    transformacao = temperatura - 273.15;
                    document.write(`A temperatura informada ${temperatura}${unidade}° foi convertida para ${transformacao}${unidadeCon}°`);
                    break;
                case "F":
                    transformacao = ((temperatura - 273.15) * 1.8) + 32;
                    document.write(`A temperatura informada ${temperatura}${unidade}° foi convertida para ${transformacao}${unidadeCon}°`);
                    break;
            }
            break;
        default:
            alert("Opção inválida!");
    }
}