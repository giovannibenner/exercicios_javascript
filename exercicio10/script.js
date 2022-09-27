let nomes = ["giovanni", "livia", "nicolas", "john", "yuri"];

function InfoArray(nomes, novoNome, index)
{
    console.log("A quantidade de elementos do array é de: ", nomes.length);
    nomes.push(novoNome);
    console.log("Voce escolheu o indice: " + index + " que é o elemento " + nomes[index])
    console.log("A quantidade atual de elementos do array é de: ", nomes.length);
}

InfoArray(nomes, "Gabriel", 3);