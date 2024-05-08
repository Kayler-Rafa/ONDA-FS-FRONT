function atualizarPessoa(dados) {
  fetch(url + dados.id, {
    method: "PATCH",
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
      Swal.fire("Sucesso!", "Pessoa atualizada com sucesso.", "success");
    });
}