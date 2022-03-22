var notas = [];

function adicionarNota() {
    var valorElemento = parseFloat(document.getElementById("notas").value);
    var adicionar = notas.push(valorElemento);

    document.getElementById("notas").value = "";
}

function calculaMedia() {
    var soma = 0;
    var media = 0;
    for (var i = 0; i < notas.length; i++)
        soma += notas[i];
    media = soma / notas.length;
    return media.toFixed(2);
}

function mostraResultado() {
    var opcoes = document.getElementById("resultado");

    opcoes.innerHTML = `<p> A média de suas notas é: ${calculaMedia()} </p>`;
}