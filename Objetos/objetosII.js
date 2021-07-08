const filmes = [
  {
    id: 1,
    titulo: "Dilema das redes",
    descricao: "Um documentario sobre technologia",
    duracao: 120,
  },
  {
    id: 2,
    titulo: "Us",
    descricao: "Um filme ok",
    duracao: 150,
  },
  {
    id: 3,
    titulo: "Corra",
    descricao: "Um filme de suspense top",
    duracao: 135,
  },
];

const { id, titulo, descricao, duracao } = filmes;

filmes.map((filme) => console.log(filme.titulo));
