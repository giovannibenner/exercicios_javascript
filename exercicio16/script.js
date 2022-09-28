window.onload = function()
{
    const tab = document.getElementById("tabuada");
    const btn = document.getElementById("calcular");
    const resp = document.getElementById("resposta");
    
    btn.addEventListener('click', function()
    {
        let tabuada = 0;

        let numero = Number(tab.value);
        
        if(typeof numero !== 'number')
        {
            alert("Digite um valor numerico valido");
        }
        else
        {
            resp.innerHTML = `Tabuada do numero ${numero} <br>`;

            while(tabuada <= 10)
            {
                resp.innerHTML += `${numero} x ${tabuada} = ${(numero * tabuada)} <br>`;
                tabuada++;
            }
        }
    })
}
