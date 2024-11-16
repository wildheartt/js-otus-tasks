function getDayOfWeek() {
  const userInput = prompt('Введите дату в формате ДД.ММ.ГГГГ:');

  const [day, month, year] = userInput.split('.').map(Number);

  const date = new Date(year, month - 1, day);

  const daysOfWeek = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];

  const dayOfWeek = daysOfWeek[date.getDay()];

  alert(`День недели: ${dayOfWeek}`);
}

getDayOfWeek();
