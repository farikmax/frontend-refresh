// const powerData = [

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
      <div class="user-card">
          <h3>👤 ${name}</h3>
          <p>✉️ Email: ${email}</p>
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
