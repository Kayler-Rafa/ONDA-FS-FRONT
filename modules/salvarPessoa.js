function salvarPessoa(dados) {
  const dataNascimento = dados.dataNascimento;
  dados.idade = calcularIdade(dataNascimento);
  fetch(url, {
    method: "POST",
    body: JSON.stringify(dados),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((pessoa) => {
      console.log(pessoa);
      formPessoa.reset();
      formPessoa.classList.remove("was-validated");
      mostrarTable();
      pegarPessoas();
      document.getElementById("idPessoa").value = "";
      Swal.fire("Sucesso!", "Pessoa salva com sucesso.", "success");
    });
}
