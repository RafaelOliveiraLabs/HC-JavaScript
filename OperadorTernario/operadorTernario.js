// if... else

/* if (idade >= 18) {
  return "Maior de idade";
} else {
  ("Menor de idade");
} */

/* idade >= 18 ? "Maior de idade" : "Menor de idade"; //teste logico ? verdadeiro : falso */

function calculaIdade(idade) {
  return idade >= 18 ? "Maior de idade" : "Menor de idade";
}

console.log(calculaIdade(21));
