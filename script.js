// const powerData = [
//   220,
//   225,
//   "219",
//   220,
//   null,
//   221,
//   "ошибка",
//   218,
//   220,
//   undefined,
//   224,
// ];

// const result = powerData.filter((el) => el === +el);
// const counter = result.filter((el) => el === 220);
// console.log(result);
// console.log(`Идеальное напряжение 220V встретилось: ${counter.length} раза.`);

const substations = [
  { id: 1, name: "ПС Южная", loadMW: 45, isActive: true },
  { id: 2, name: "ПС Северная", loadMW: 110, isActive: false },
  { id: 3, name: "ПС Западная", loadMW: 85, isActive: true },
  { id: 4, name: "ПС Восточная", loadMW: 130, isActive: true },
  { id: 5, name: "ПС Центральная", loadMW: 200, isActive: false },
];

const names = substations
  .filter((el) => el.isActive)
  .filter((el) => el.loadMW > 80)
  .map(
    (el) =>
      `Подстанция ${el.name} работает с высокой нагрузкой: ${el.loadMW} MW`,
  );

console.log(names);

const totalLoad = substations
  .filter((el) => el.isActive)
  .reduce((acc, { loadMW }) => acc + loadMW, 0);
console.log(
  `Итоговая сумарная нагрузка активных подстанций составляет ${totalLoad} MW`,
);
