

// Programa para multiplicar dois números
numero1 = float(input("Digite o primeiro número: "))
numero2 = float(input("Digite o segundo número: "))

multiplicacao = numero1 * numero2
print(f"A multiplicação de {numero1} por



// Programa para calcular a idade em anos, meses, dias e semanas
const anoNascimento = parseInt(prompt("Digite o ano do seu nascimento (YYYY):"));
const anoAtual = parseInt(prompt("Digite o ano atual (YYYY):"));

const idadeAnos = anoAtual - anoNascimento;
const idadeMeses = idadeAnos * 12;
const idadeDias = idadeAnos * 365;
const idadeSemanas = Math.floor(idadeDias / 7);

alert(`Você tem ${idadeAnos} anos, ${idadeMeses} meses, aproximadamente ${idadeDias} dias, e ${idadeSemanas} semanas.`);



// Programa para converter temperatura de Celsius para Fahrenheit
const celsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));

const fahrenheit = (celsius * 9/5) + 32;
alert(`A temperatura em Fahrenheit é ${fahrenheit}°F.`);



// Programa para apurar votos de uma eleição
const totalEleitores = parseInt(prompt("Digite o número total de eleitores:"));
const votosX = parseInt(prompt("Digite o número de votos do candidato X:"));
const votosY = parseInt(prompt("Digite o número de votos do candidato Y:"));
const votosBrancos = parseInt(prompt("Digite o número de votos brancos:"));
const votosNulos = parseInt(prompt("Digite o número de votos nulos:"));

if (votosX + votosY + votosBrancos + votosNulos === totalEleitores) {
    const percX = (votosX / totalEleitores) * 100;
    const percY = (votosY / totalEleitores) * 100;
    const percBrancos = (votosBrancos / totalEleitores) * 100;
    const percNulos = (votosNulos / totalEleitores) * 100;

    alert(`Percentual de votos:\nCandidato X: ${percX.toFixed(2)}%\nCandidato Y: ${percY.toFixed(2)}%\nVotos Brancos: ${percBrancos.toFixed(2)}%\nVotos Nulos: ${percNulos.toFixed(2)}%`);
} else {
    alert("A soma dos votos não é igual ao total de eleitores.");
}



// Programa para calcular o IMC
const peso = parseFloat(prompt("Digite o seu peso em kg:"));
const altura = parseFloat(prompt("Digite a sua altura em metros:"));

const imc = peso / (altura * altura);
alert(`Seu IMC é ${imc.toFixed(2)}.`);



// Programa para calcular o valor total em reais de materiais reciclados
const kgPlastico = parseFloat(prompt("Digite a quantidade de plástico (kg):"));
const kgPapel = parseFloat(prompt("Digite a quantidade de papel (kg):"));
const kgMetal = parseFloat(prompt("Digite a quantidade de metal (kg):"));

const valorPlastico = Math.floor(kgPlastico / 10) * 2.00;
const valorPapel = Math.floor(kgPapel / 30) * 3.00;
const valorMetal = Math.floor(kgMetal / 50) * 5.00;

const valorTotal = valorPlastico + valorPapel + valorMetal;
alert(`O valor total que você receberá é R$${valorTotal.toFixed(2)}.`);



// Programa para calcular a média de litros de chopp bebidos por pessoa
const litrosComprados = 300;  // Quantidade de chopp comprada
const convidados = 45;  // Número de convidados

const litrosDesperdicado = parseFloat(prompt("Digite a quantidade de chopp (litros) desperdiçado:"));
const litrosSobrando = parseFloat(prompt("Digite a quantidade de chopp (litros) que sobrou:"));

const litrosConsumidos = litrosComprados - litrosDesperdicado - litrosSobrando;
const mediaPorPessoa = litrosConsumidos / convidados;

alert(`A média de litros de chopp bebidos por pessoa foi de ${mediaPorPessoa.toFixed(2)} litros.`);
