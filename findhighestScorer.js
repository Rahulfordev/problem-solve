function highestRunScorer(playersInfo) {
  let highestScorer = playersInfo[0][0];
  let highestScore = playersInfo[0][1];

  for (let index = 1; index < playersInfo.length; index++) {
    if (highestScore < playersInfo[index][1]) {
      highestScore = playersInfo[index][1];
      highestScorer = playersInfo[index][0];
    }
  }
  return {
    highestScore,
    highestScorer,
  };
}

const playersInfo = [
  ["Korim", 20],
  ["Rakib", 35],
  ["Rizun", 15],
  ["Razul", 40],
  ["Faruk", 60],
];
const name = highestRunScorer(playersInfo);
console.log(name)
