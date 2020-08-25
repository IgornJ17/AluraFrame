const calcVolume = function(campos){
    var result;
    result = campos[1].value * campos[2].value;
    return result;
}

const refreshForm = function(campos){
    campos[0].textContent = '';
    campos[1].textContent = 1;
    campos[2].textContent = 0.00;
}

var campos = [
    document.querySelector("#data"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor") 
]

const buttonSubmit = document.querySelector("[data-submit]")

buttonSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    var createdTr = document.createElement('tr');
    campos.forEach(campo => {
        var createdTd = document.createElement('td');
        createdTd.textContent = campo.value;
        createdTr.appendChild(createdTd);
    });
    
    var tdVolume = document.createElement("td")
    tdVolume.textContent = "R$ " + calcVolume(campos);
    createdTr.appendChild(tdVolume);
    var selectTbody = document.querySelector("[data-form]");
    selectTbody.appendChild(createdTr);

    console.log(calcVolume(campos));

    refreshForm(campos);

})