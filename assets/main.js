const inputAddress = document.querySelector('.address');
const btn = document.querySelector('.btn-input');

btn.addEventListener('click', function (e) {
    if (!inputAddress.value) return;
    req(Number(inputAddress.value));
})
inputAddress.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputAddress.value) return;
        req(Number(inputAddress.value));
    }
});

function req(address) {
    fetch(`https://viacep.com.br/ws/` + address + `/json/`)
        .then(response => response.json())
        .then(data => loadElements(data) & console.log(data))
        .catch(e => {alert('CEP invalido'); 
            (inputAddress.value = '')
        });

    function loadElements(json) {
        

        const result = document.querySelector('.result');

        const table = document.createElement('table');
        const tr = document.createElement('tr');
        var br = document.createElement("br");
        let td = document.createElement('td');


        td.innerHTML += `Bairro: ${json.bairro}`;
        td.appendChild(br);
        tr.appendChild(td);

        td.innerHTML += `CEP: ${json.cep}`;
        td.appendChild(br);
        tr.appendChild(td);

        td.innerHTML += `Complemento: ${json.complemento}`;
        td.appendChild(br);
        tr.appendChild(td);

        td.innerHTML += `DDD: ${json.ddd}`;
        td.appendChild(br);
        tr.appendChild(td);

        td.innerHTML += `ibge: ${json.ibge}`;
        td.appendChild(br);
        tr.appendChild(td);

        td.innerHTML += `localidade: ${json.localidade}`;
        td.appendChild(br);
        tr.appendChild(td);

        td.innerHTML += `logradouro: ${json.logradouro}`;
        td.appendChild(br);
        tr.appendChild(td);

        td.innerHTML += `siafi: ${json.siafi}`;
        td.appendChild(br);
        tr.appendChild(td);

        td.innerHTML += `uf: ${json.uf}`;
        td.appendChild(br);
        tr.appendChild(td);

        table.appendChild(tr);

        result.appendChild(table);
    }
}


