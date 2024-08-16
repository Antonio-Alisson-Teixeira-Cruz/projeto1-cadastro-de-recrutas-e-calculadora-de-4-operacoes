let primeiroNumero = prompt ('Digite o primeiro número:')
let segundoNumero = prompt ('Digite o segundo número:') 

let operacoesNumericas = [
  parseInt(primeiroNumero) + parseInt(segundoNumero),
  primeiroNumero - segundoNumero,
  primeiroNumero * segundoNumero,
  primeiroNumero / segundoNumero]

alert((primeiroNumero) + ' ' + '+' + (segundoNumero) + ' ' + '=' + ' ' + (operacoesNumericas[0]) + '\n' + (primeiroNumero) + ' ' + '-' + (segundoNumero) + ' ' + '=' + ' ' + (operacoesNumericas[1]) + '\n' + (primeiroNumero) + ' ' + '*' + (segundoNumero) + ' ' + '=' + ' ' + (operacoesNumericas[2]) + '\n' + (primeiroNumero) + ' ' + '/' + (segundoNumero) + ' ' + '=' + ' ' + (operacoesNumericas [3]))
