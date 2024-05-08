const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  // console.log(req)
  console.log(req.url);
  console.log(req.method);

  // res.end('<h1>Olá, bem vindo ao servidor da batata!</h1>')
  if (req.url == "/") {
    indexHtml = fs.readFileSync("onda.html");
    res.end(indexHtml);
  } else if (req.url == "/modules/salvarPessoa.js") {
    salvarPessoa = fs.readFileSync("./modules/salvarPessoa.js");
    res.end(salvarPessoa);
  } else if (req.url == "/modules/atualizarPessoa.js") {
    atualizarPessoa = fs.readFileSync("./modules/atualizarPessoa.js");
    res.end(atualizarPessoa);
  } else if (req.url == "/modules/events.js") {
    events = fs.readFileSync("./modules/events.js");
    res.end(events);
  } else if (req.url == "/modules/apiUrl.js") {
    apiUrl = fs.readFileSync("./modules/apiUrl.js");
    res.end(apiUrl);
  } else if (req.url == "/modules/valid-form.js") {
    validForm = fs.readFileSync("./modules/valid-form.js");
    res.end(validForm);
  } else if (req.url == "/modules/pegarPessoa.js") {
    pegarPessoa = fs.readFileSync("./modules/pegarPessoa.js");
    res.end(pegarPessoa);
  } else if (req.url == "/modules/validarCampos.js") {
    validarCampos = fs.readFileSync("./modules/validarCampos.js");
    res.end(validarCampos);
  } else if (req.url == "/modules/deletarPessoa.js") {
    deletarPessoa = fs.readFileSync("./modules/deletarPessoa.js");
    res.end(deletarPessoa);
  } else if (req.url == "/modules/mostrarForm.js") {
    mostrarForm = fs.readFileSync("./modules/mostrarForm.js");
    res.end(mostrarForm);
  } else if (req.url == "/modules/mostrarTable.js") {
    mostrarTable = fs.readFileSync("./modules/mostrarTable.js");
    res.end(mostrarTable);
  } else if (req.url == "/modules/calcularIdade.js") {
    calcularIdade = fs.readFileSync("./modules/calcularIdade.js");
    res.end(calcularIdade);
  } else if (req.url == "/modules/editarPessoa.js") {
    editarPessoa = fs.readFileSync("./modules/editarPessoa.js");
    res.end(editarPessoa);
  } else if (req.url == "/modules/filtrarTable.js") {
    filtrarTable = fs.readFileSync("./modules/filtrarTable.js");
    res.end(filtrarTable);
  } else {
    res.end("404 não encontrado");
  }
});

server.listen(3001, function () {
  console.log("Servidor rodando na porta 3001");
});
