const factorial = (n) => {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
};

export const calculatePermutations = (word) => {
  const letterCounts = {};
  for (let letter of word) {
    letterCounts[letter] = (letterCounts[letter] || 0) + 1;
  }

  let totalLetters = word.length;
  let denominator = 1;
  for (let count of Object.values(letterCounts)) {
    denominator *= factorial(count);
  }

  return factorial(totalLetters) / denominator;
};

export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const words = [
  "abacaxi",
  "banana",
  "laranja",
  "uva",
  "mamão",
  "morango",
  "abóbora",
  "tomate",
  "batata",
  "cenoura",
  "couve",
  "espinafre",
  "cachorro",
  "gato",
  "elefante",
  "girafa",
  "tigre",
  "onça",
  "macaco",
  "papagaio",
  "carro",
  "bicicleta",
  "avião",
  "navio",
  "motocicleta",
  "ônibus",
  "trem",
  "computador",
  "teclado",
  "mouse",
  "monitor",
  "programação",
  "javascript",
  "desenvolvedor",
  "engenheiro",
  "caneta",
  "caderno",
  "universidade",
  "escola",
  "professor",
  "astronauta",
  "planeta",
  "galáxia",
  "estrela",
  "livro",
  "biblioteca",
  "telefone",
  "telefone",
  "janela",
  "porta",
  "cadeira",
  "mesa",
  "geladeira",
  "microondas",
  "televisão",
  "controle",
  "relógio",
  "bicicleta",
  "esporte",
  "futebol",
  "basquete",
  "voleibol",
  "natação",
  "corrida",
  "viagem",
  "hotel",
  "aeroporto",
  "passaporte",
  "festa",
  "aniversário",
  "bolo",
  "doce",
  "sorvete",
  "bala",
  "praia",
  "montanha",
  "rio",
  "oceano",
  "floresta",
  "chuva",
  "nuvem",
  "sol",
  "lua",
  "tempestade",
];
