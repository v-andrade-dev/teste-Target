diasComFaturamento = faturamento.filter(x => x.valor > 0);
console.log(diasComFaturamento);

function menorFaturamento(){
    menor = diasComFaturamento[0].valor;
    dia = diasComFaturamento[0].dia;

    for(let i=0; i<diasComFaturamento.length; i++){
        if(menor>diasComFaturamento[i].valor){
            menor = diasComFaturamento[i].valor;
            dia = diasComFaturamento[i].dia;
        }
    }

    console.log("Menor faturamento: " + menor + " no dia " + dia);
    
}

function maiorFaturamento(){
    maior = diasComFaturamento[0].valor;
    dia = diasComFaturamento[0].dia;

    for(let i=0; i<diasComFaturamento.length; i++){
        if(maior<diasComFaturamento[i].valor){
            maior = diasComFaturamento[i].valor;
            dia = diasComFaturamento[i].dia;
        }
    }

    console.log("Maior faturamento: " + maior + " no dia " + dia);
    
}

function mediaFaturamento(){
    soma = 0;
    dias = 0;
    for(let i=0; i<diasComFaturamento.length; i++){
        soma += diasComFaturamento[i].valor;
    }

    media = soma/diasComFaturamento.length;

    for(let i=0; i<diasComFaturamento.length; i++){
        if(diasComFaturamento[i].valor > media){
            dias++;
        }
    }

    console.log("A média do faturamento foi "+ media + "\n" + dias + " dias tiveram faturamento acima da média") ;
}

menorFaturamento();
maiorFaturamento();
mediaFaturamento();

