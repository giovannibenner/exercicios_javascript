function Palavra(palavra)
{
    console.log("Esta palavra possui tamanho de: ", palavra.length, "caracteres");
    console.log("A palavra ficou: ", palavra.toUpperCase());
    console.log("A letra: ", palavra[2], " é o terceiro caractere da palavra ", palavra);
    console.log(palavra, " ficou: ", palavra.replace(palavra[2], 'X'));
}

Palavra("giovanni");