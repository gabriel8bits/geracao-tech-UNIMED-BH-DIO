function comparaNum (num1, num2) {
    const primeiraF = criaPrimeiraFrase(num1, num2);
    const segundaF = criaSegundaFrase(num1, num2);

    return `${primeiraF} ${segundaF}`;
}

function criaPrimeiraFrase(num1, num2) {
    let iguais = '';

    if(num1 !== num2) {
        iguais = "não";
    }

    return `Os numeros ${num1} e ${num2} ${iguais} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;

    let resultado10 = "menor";
    let resultado20 = "maior";
    const compara10 = soma > 10;
    const compara20 = soma < 20;

    if(compara10) {
        resultado10 = 'maior'; 
    }

    if(compara20) {
        resultado20 = 'menor';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`;
}

console.log(comparaNum(10, 10));