console.log('Hello World!')

/* Lógica de programação
1. "Guardar" o valor da quantidade de $ por mês, o input - OK
2. "Guardar" o valor horas trabalhadas por dia, o input - OK
--> 6. Criar a função no botão "CalcularValorHora" para servir de gatilho
3. Calcular horasporMês = 22 dias x horas - OK
4. Calcular o salário por horas = salário / horasPorMês - OK
5. "Guardar" o resultado - OK
7. Printar o resultado = Mostrar o resultado no valor por hora da página - OK
*/

var inputGanhoMes = document.querySelector('#ganho-mes'); // acesso aos inputs do HTML

var inputHorasDia = document.querySelector('#horas-dia'); // acesso aos inputs do HTML

var resultadoTexto = document.querySelector('#resposta'); // acesso aos inputs do HTML

function calcularValorHora() {
    var salario = inputGanhoMes.valueAsNumber;
    var horas = inputHorasDia.valueAsNumber;
    //cálculo: regra de negócio
    var horasPorMes = horas * 22; //convencionamos 22 dias contábeis
    var resultado = salario / horasPorMes;
    var resultadoFormatado =resultado.toFixed(2); //selecionar apenas 2 casas decimais
    //resultadoTexto.textContent = "R$ " + resultado;
    resultadoTexto.textContent = "R$ " + resultadoFormatado; //concatenar
    /*
    var salario = inputGanhoMes / horasPorMes;
    var horasPorMes = 22 * inputHorasDia;
    console.log(salario, 'Salário');
    console.log(horasPorMes, 'Considerando 22 dias/mês');
    */
    /* Novas opções de formatação
    resultadoTexto.textContent "R$ " + Math.floor(resultado) + ",00";
    resultadoTexto.textContent "R$ " + Math.ceil(resultado) + ",00";
    */
}