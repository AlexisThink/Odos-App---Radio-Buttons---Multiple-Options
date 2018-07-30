var optionsDay = document.querySelectorAll('#dayTime input');
var button = document.querySelector('#resultados');
var showMessage = document.querySelector('#seleccion');
var seleccionDia;

button.addEventListener('click', function(){

    optionsDay.forEach(function(actual){
        if(actual.checked === true){
            seleccionDia = actual.value;
        }
    })

    var numeroOpt = parseInt(seleccionDia);

    if(numeroOpt === 0){
        showMessage.textContent = 'Selecciono: Mañana';
        console.log(numeroOpt)
    } else
    if(numeroOpt === 1){
        showMessage.textContent = 'Selecciono: Tarde';
        console.log(numeroOpt)
    } else
    if(numeroOpt === 2){
        showMessage.textContent = 'Selecciono: Noche';
        console.log(numeroOpt)
    }
})