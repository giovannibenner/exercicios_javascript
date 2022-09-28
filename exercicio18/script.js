window.onload = function()
{
    const list = document.querySelector("#lista");
    const btn = document.querySelector("#botao");

    let veiculos = ["onibus", "motocicleta", "patinete"];

    btn.addEventListener('click', function()
    {
        
        for(let element of veiculos)
        {
            let li = document.createElement('li');
            list.appendChild(li).textContent = element;
        }
    })
}