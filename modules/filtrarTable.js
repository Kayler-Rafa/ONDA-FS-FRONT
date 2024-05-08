const campoInput = document.getElementById("input");

campoInput.addEventListener("keyup", (event) => {
  const buscarTermo = event.target.value.toLowerCase();
  filtrarTabela(buscarTermo);
});

function filtrarTabela(buscarTermo) {
  fetch(url)
    .then((res) => res.json())
    .then((pessoas) => {
      const tBody = document.querySelector("tbody");
      var tableContent = "";

      for (var pessoa of pessoas) {
        const nome = pessoa.nome.toLowerCase();

        if (nome.includes(buscarTermo.toLowerCase())) {
          tableContent += `
            <tr>
              <th scope="row">${pessoa.id}</th>
              <td>${pessoa.nome}</td>
              <td>${pessoa.dataNascimento}</td>
              <td>${pessoa.idade}</td>
              <td>${pessoa.email}</td>
              <td>
                <button onclick="editarPessoa(${pessoa.id})" class="btn btn-primary"><i class="fa-solid fa-edit"></i></button>
                <button onclick="deletarPessoa(${pessoa.id})" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
              </td>
            </tr>
          `;
        }
      }

      tBody.innerHTML = tableContent;
    })
    .catch((error) => {
      console.error('Erro ao buscar pessoas:', error);
    });
}