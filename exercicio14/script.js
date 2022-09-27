function TabelaDePrecos(Frutas)
{
    for(let produto of Frutas)
    {
        for(let p in produto)
        {
            console.log(`${p} -> ${produto[p]}`)
        }
    }
}

let Frutas = 
[
{
    nome: "Maca",
    preco: 10
},
{
    nome: "Uva",
    preco: 20
},
{
    nome: "Banana",
    preco: 5
}
]

TabelaDePrecos(Frutas);