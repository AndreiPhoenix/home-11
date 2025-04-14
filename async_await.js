// Функция задержки
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Переписанный код с async/await
async function fetchUserData() {
  try {
    // Первый запрос
    const usersResponse = await fetchData('/users');
    console.log('Список пользователей:', usersResponse.users);
    
    // Добавляем задержку между запросами
    await delay(1000);
    
    // Второй запрос
    const firstUserUrl = usersResponse.users[0].profileUrl;
    const userDetails = await fetchData(firstUserUrl);
    console.log('Данные первого пользователя:', userDetails);
  } catch (error) {
    console.error('Произошла ошибка:', error.message);
  }
}

// Вызываем асинхронную функцию
fetchUserData();
