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

// const substations = [
//   { id: 1, name: "ПС Южная", loadMW: 45, isActive: true },
//   { id: 2, name: "ПС Северная", loadMW: 110, isActive: false },
//   { id: 3, name: "ПС Западная", loadMW: 85, isActive: true },
//   { id: 4, name: "ПС Восточная", loadMW: 130, isActive: true },
//   { id: 5, name: "ПС Центральная", loadMW: 200, isActive: false },
// ];

// const names = substations
//   .filter((el) => el.isActive)
//   .filter((el) => el.loadMW > 80)
//   .map(
//     (el) =>
//       `Подстанция ${el.name} работает с высокой нагрузкой: ${el.loadMW} MW`,
//   );

// console.log(names);

// const totalLoad = substations
//   .filter((el) => el.isActive)
//   .reduce((acc, { loadMW }) => acc + loadMW, 0);
// console.log(
//   `Итоговая сумарная нагрузка активных подстанций составляет ${totalLoad} MW`,
// );

// async function getUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     const info = data
//       .filter((el) => el.id < 6)
//       .map(({ name, email }) => `Пользователь: ${name}, Email: ${email}`);

//     console.log(info);
//   } catch (error) {
//     console.error("Произошла ошибка при загрузке данных:", error.message);
//   }
// }

// getUsers();

// Находим кнопку в HTML
const btn = document.getElementById("load-btn");

async function getUsers() {
  try {
    btn.textContent = "Загрузка...";
    btn.disabled = true;

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    // 1. Находим наш пустой div из HTML
    const usersContainer = document.getElementById("users-list");

    // 2. Формируем массив HTML-карточек вместо обычных строк
    const info = data
      .filter((el) => el.id < 6)
      .map(
        ({ name, email }) => `
      <div class="user-card" style="border: 2px solid #4caf50; padding: 15px; margin: 15px 0; border-radius: 8px; font-family: sans-serif; background-color: #f9f9f9;">
          <h3 style="margin-top: 0; color: #2e7d32;">👤 ${name}</h3>
          <p style="margin-bottom: 0; color: #555;">✉️ Email: ${email}</p>
        </div>
      `,
      );

    // 3. Склеиваем массив карточек в одну большую HTML-строку и вставляем в div

    usersContainer.innerHTML = info.join("");
    btn.textContent = "Сеть подключена";
    btn.disabled = false;
  } catch (error) {
    console.error("Произошла ошибка при загрузке данных:", error.message);
  }
}

// Вешаем слушатель: при клике выполнить функцию getUsers
btn.addEventListener("click", getUsers);
