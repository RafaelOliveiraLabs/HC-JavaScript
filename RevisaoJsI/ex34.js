//Exercicio 34 https://github.com/simaraconceicao/javascript-ii-gama-xp

//Crie um algoritmo que receba tres notas de um aluno, calcule sua media e mostre as seguintes mensagens de acordo com a situacao:

// - Se a media for maior ou igual a 7 - Aprovado
// - Se a media for maior ou igual a 5 e menor que 7 - Recuperacao
// - Se a media for menor que 5 - Reprovado

function calculaMedia(nota1, nota2, nota3) {
  let media = (nota1 + nota2 + nota3) / 3;

  if (media >= 7) {
    return "Aprovado";
  } else if (media >= 5 && media < 7) {
    return "Recuperacao";
  } else {
    return "Reprovado";
  }
}

console.log(calculaMedia(5, 7, 9));
