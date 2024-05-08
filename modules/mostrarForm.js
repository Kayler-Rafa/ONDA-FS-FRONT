function mostrarForm(status) {
  salvarPessoaBtn.innerText = status;
  formPessoa.style.display = "block";
  document.getElementById("tablePessoa").style.display = "none";
}