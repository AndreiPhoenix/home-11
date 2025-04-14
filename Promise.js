// Функция, имитирующая запрос к API
function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.95) { // 5% шанс ошибки для демонстрации
        if (url === '/users') {
          resolve({
            users: [
              { id: 1, name: 'John Doe', profileUrl: '/users/1' },
              { id: 2, name: 'Jane Smith', profileUrl: '/users/2' }
            ]
          });
        } else if (url === '/users/1') {
          resolve({
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            age: 30
          });
        }
      } else {
        reject(new Error('Ошибка сервера'));
      }
    }, 2000);
  });
}

// Цепочка промисов
fetchData('/users')
  .then(data => {
    console.log('Список пользователей:', data.users);
    return fetchData(data.users[0].profileUrl);
  })
  .then(userData => {
    console.log('Данные первого пользователя:', userData);
  })
  .catch(error => {
    console.error('Произошла ошибка:', error.message);
  });
