
var inputValorHora = document.querySelector('#valor-hora'); // A ser inputado pelo lado client, id declarado no html
var inputHorasProjeto = document.querySelector('#horas-projeto'); // A ser inputado pelo lado client, id declarado no html
var calculoProjeto = document.querySelector('#resposta'); //id declarado no html

function calcular() {
    var valorDaHora = inputValorHora.valueAsNumber;
    var horasDoProjeto = inputHorasProjeto.valueAsNumber;
    var calculoProjeto = valorDaHora * horasDoProjeto;
    resposta.textContent = 'Resposta: R$ ' + calculoProjeto;
    //console.log(calculoProjeto, 'Multiplicação dos dois inputs'); //Para eu enxergar se está rolando
}