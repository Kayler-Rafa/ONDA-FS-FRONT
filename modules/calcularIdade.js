function calcularIdade(dataNascimento) {
  const hoje = new Date();
  const dataNasc = new Date(dataNascimento);
  var idade = hoje.getFullYear() - dataNasc.getFullYear();
  const mes = hoje.getMonth() - dataNasc.getMonth();
  if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
    idade--;
  }
  return idade;
}