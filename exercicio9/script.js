function valorIMC(nome, altura, peso)
{
    altura = Number(altura);
    peso = Number(peso);

    let imc = peso / (altura*2);

    console.log("Nome: ", nome);
    console.log("Altura: ", altura);
    console.log("Peso: ", peso)

    console.log("IMC: ", imc);
}

nome = prompt("Digite seu nome");
peso = prompt("Digite seu peso");
altura = prompt("Digite sua altura");

valorIMC(nome, altura, peso);