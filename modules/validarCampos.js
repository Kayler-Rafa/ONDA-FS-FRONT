function validarCampos() {
  const nome = document.getElementById("nome").value.trim();
  const dataNascimento = document
    .getElementById("dataNascimento")
    .value.trim();
  const email = document.getElementById("email").value.trim();
  return nome !== "" && dataNascimento !== "" && email !== "";
}
