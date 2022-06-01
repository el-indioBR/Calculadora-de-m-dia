var notas = []

function adicionarNota() {
  var valorElemento = parseFloat(document.getElementById('notas').value)
  var adicionar = notas.push(valorElemento)

  document.getElementById('notas').value = ''
}

function calculaMedia() {
  let soma = 0
  let media = 0

  for (let i = 0; i < notas.length; i++) {
    soma += notas[i]
  }
  media = soma / notas.length
  return media.toFixed(2)
}

function mostraResultado() {
  var opcoes = document.getElementById('resultado')

  opcoes.innerHTML = `<p> A média de suas notas é: ${calculaMedia()} </p>`
}
