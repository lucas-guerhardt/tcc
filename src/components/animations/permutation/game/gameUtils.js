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
  if (totalLetters <= 5) {
    let denominator = 1;
    for (let count of Object.values(letterCounts)) {
      denominator *= factorial(count);
    }

    return factorial(totalLetters) / denominator;
  } else {
    let denominator = {};
    for (let repeat of word) {
      if (denominator[repeat] === undefined) {
        denominator[repeat] = 1;
      } else {
        denominator[repeat]++;
      }
    }

    if (Object.values(denominator).every((count) => count === 1)) {
      return `${totalLetters}!`;
    }

    for (let [key, value] of Object.entries(denominator)) {
      if (value == 1) {
        delete denominator[key];
      } else {
        denominator[key] = `${value}!`;
      }
    }
    return `${totalLetters}! / ${Object.values(denominator).join(" * ")}`;
  }
};

function getRandomCloseValue(base, range) {
  return base + Math.floor(Math.random() * range * 2) - range;
}

function modifyDenominator(denominator) {
  let newDenominator = [...denominator];
  let index = Math.floor(Math.random() * newDenominator.length);
  let factor = parseInt(newDenominator[index].replace("!", ""));
  factor += Math.random() < 0.5 ? -1 : 1;
  newDenominator[index] = `${Math.max(factor, 1)}!`;
  return newDenominator;
}

export const generateWrongOptions = (correctPermutations) => {
  if (correctPermutations <= 120) {
    const wrongOption1 =
      correctPermutations + Math.floor(Math.random() * 10 + 1);
    const wrongOption2 =
      correctPermutations - Math.floor(Math.random() * 5 + 1);
    const wrongOption3 =
      correctPermutations + Math.floor(Math.random() * 20 + 5);
    return [wrongOption1, wrongOption2, wrongOption3];
  } else {
    let answer = correctPermutations.split(" / ");
    let numerator = parseInt(answer[0].replace("!", ""));
    let denominator = answer[1] ? answer[1].split(" * ") : [];

    if (denominator.length === 0) {
      const wrongOption1 = `${getRandomCloseValue(numerator, 2)}!`;
      const wrongOption2 = `${getRandomCloseValue(numerator, 3)}!`;
      const wrongOption3 = `${getRandomCloseValue(numerator, 4)}!`;
      return [wrongOption1, wrongOption2, wrongOption3];
    }

    let newNumerator = getRandomCloseValue(numerator, 2);
    let newDenominator = modifyDenominator(denominator);
    const wrongOption1 = `${newNumerator}! / ${newDenominator.join(" * ")}`;

    newNumerator = getRandomCloseValue(numerator, 3);
    newDenominator = modifyDenominator(denominator);
    const wrongOption2 = `${newNumerator}! / ${newDenominator.join(" * ")}`;

    newNumerator = getRandomCloseValue(numerator, 4);
    newDenominator = modifyDenominator(denominator);
    const wrongOption3 = `${newNumerator}! / ${newDenominator.join(" * ")}`;

    return [wrongOption1, wrongOption2, wrongOption3];
  }
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
