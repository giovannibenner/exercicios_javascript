function Inverte(string)
{
    let strReverse = string.split("");
    strReverse = strReverse.reverse();
    strReverse = strReverse.join();
    return strReverse;
}

console.log(Inverte("isso aqui"));