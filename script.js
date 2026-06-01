const powerData = [
  220,
  225,
  "219",
  220,
  null,
  221,
  "ошибка",
  218,
  220,
  undefined,
  224,
];

const result = powerData.filter((el) => el === +el);
const counter = result.filter((el) => el === 220);
console.log(result);
console.log(`Идеальное напряжение 220V встретилось: ${counter.length} раза.`);
