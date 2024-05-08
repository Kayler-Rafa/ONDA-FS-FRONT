function editarPessoa(id) {
  document.getElementById("salvarPessoa").innerHTML = `<i class="fa-solid fa-floppy-disk""></i> Atualizar`;
  console.log("editar", id);
  fetch(url + id)
    .then((res) => res.json())
    .then((pessoa) => {
      document.getElementById("idPessoa").value = pessoa.id;
      document.getElementById("nome").value = pessoa.nome;
      document.getElementById("dataNascimento").value =
        pessoa.dataNascimento;
      document.getElementById("email").value = pessoa.email;
      mostrarForm("Atualizar");
    });
}