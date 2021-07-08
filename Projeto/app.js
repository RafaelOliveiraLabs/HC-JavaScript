const livros = require("./database");
//console.log(livros);

//pegar input usuario
const readline = require("readline-sync");
const entradaInicial = readline.question("Deseja buscar um livro? S/N");

//Se Sim, mostra categorias disponiveis e pergunta a categoria o usuario escolhe
//Se nao, mostra todos os livros em ordem crescente pela quantidade de paginas
if (entradaInicial.toLocaleUpperCase() === "S") {
  console.log("Essas sao as categorias disponiveis");
  console.log("");
  console.log("Produtividade e estilo de vida / Historicos / Ficcao / Tecnologia");
  console.log("");

  const entradaCategoria = readline.question("Qual categoria voce escolhe?");
  const retorno = livros.filter((livro) => livro.categoria === entradaCategoria);

  console.log("");
  console.table(retorno);
} else {
  const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas);

  console.log("");
  console.log("Esses sao todos os livros disponiveis:");
  console.table(livrosOrdenados);
}
