function deletarPessoa(id) {
  console.log("excluir", id);
  fetch(url + id, {
    method: "DELETE",
  }).then((res)=>{
    return res.json()
  }).then((pessoa)=>{
    console.log('foi deletado',pessoa)
    pegarPessoas()
    swal({
      title: "Deletado com sucesso",
      text: `A pessoa ${id} foi deletada com sucesso`,
      icon: "success"
    })
  });
}