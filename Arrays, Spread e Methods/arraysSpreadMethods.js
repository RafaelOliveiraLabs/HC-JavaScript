const alunosGama = ["Paula", "Jorge", "Flavio", "Juliana"];

//Acessar informacoes no array
console.log(alunosGama[2]); //Flavio

//Operador Spread (...)
const alunosXp = [...alunosGama, "Rafael"];
console.log(alunosXp);

//Methods de iteracao

/* for (let i = 0; i < alunosXp.length; i++) {
  console.log(alunosXp[i]);
} */

//map
alunosXp.map((aluno) => console.log(aluno));

//filter
const numeros = [34, 45, 67, 90, 55, 76];

const numerosImpares = numeros.filter((numero) => numero % 2 != 0);
console.log(numerosImpares);

const numerosPares = numeros.filter((numero) => numero % 2 == 0);
console.log(numerosPares);

//find
const produtos = ["geladeira", "cama", "fogao"];

produtos.find((produto) => produto === "cama");

//sort
const numerosOrdenadosDecrescente = numeros.sort((a, b) => b - a);
console.log(numerosOrdenadosDecrescente);

const numerosOrdenadosCrescente = numeros.sort();
console.log(numerosOrdenadosCrescente);

//reduce - reduz nosso array a um resultado de uma operacao matematica
const numbers = [1, 34, 35];

const soma = numbers.reduce((valorAnterior, valorAtual) => {
  return valorAnterior + valorAtual;
}, 5);

console.log(soma); //75 - soma de todos + 5
