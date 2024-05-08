function pegarPessoas() {
  fetch(url)
    .then((res) => res.json())
    .then((pessoas) => {
      console.log(pessoas);
      var listaPessoas = "";
      for (var pessoa of pessoas) {
        listaPessoas += `
              <tr>
                  <th scope="row">${pessoa.id}</th>
                  <td>${pessoa.nome}</td>
                  <td>${pessoa.dataNascimento}</td>
                  <td>${pessoa.idade}</td>
                  <td>${pessoa.email}</td>
                  <td>
                      <button onclick="editarPessoa(${pessoa.id})" class="btn btn-primary"><i class="fas fa-edit"></i> </button>
                      <button onclick="deletarPessoa(${pessoa.id})" class="btn btn-danger"><i class="fas fa-trash-alt"></i> </button>
                  </td>
              </tr>
              `;
      }
      document.querySelector("tbody").innerHTML = listaPessoas;
    });
}

pegarPessoas()