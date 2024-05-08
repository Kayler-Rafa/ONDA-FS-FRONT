var url = "/pessoas/";

var formPessoa = document.querySelector("form");
formPessoa.style.display = "none";
document.getElementById("tablePessoa").style.display = "block";
const salvarPessoaBtn = document.getElementById("salvarPessoa");

formPessoa.addEventListener("submit", (event) => {
  event.preventDefault();
  const dataPessoa = new FormData(formPessoa);
  const dataPost = Object.fromEntries(dataPessoa);

  if (validarCampos()) {
    if (salvarPessoaBtn.innerText === "Salvar") {
      salvarPessoa(dataPost);
    } else {
      atualizarPessoa(dataPost);
    }
  } else {
    Swal.fire(
      "Atenção!",
      "Por favor, preencha todos os campos.",
      "warning",
    );
  }
});