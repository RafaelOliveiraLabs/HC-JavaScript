const pessoa = {
  nome: "Rafael",
  idade: 23,
  cidade: "DC",
};

//Notacao de ponto
console.log(pessoa.nome); //Rafael

//Notacao de colchetes
console.log(pessoa["idade"]); //23

//Destructing
const { nome, idade, cidade } = pessoa;
console.log(cidade); //DC
