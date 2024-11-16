const getDayOfWeek = require('./task3.js');

test('Возвращает правильный день недели для корректной даты', () => {
  expect(getDayOfWeek('12.11.2024')).toBe('Вторник');
  expect(getDayOfWeek('01.01.2023')).toBe('Воскресенье');
  expect(getDayOfWeek('15.11.2024')).toBe('Пятница');
});

test('Обрабатывает некорректные даты', () => {
  expect(getDayOfWeek('31.02.2024')).toBe('Пятница'); // JavaScript корректирует дату
  expect(getDayOfWeek('29.02.2023')).toBe('Среда'); // 2023 - не високосный год
});

test('Возвращает undefined для некорректного формата даты', () => {
  expect(getDayOfWeek('invalid date')).toBeUndefined();
  expect(getDayOfWeek('')).toBeUndefined();
  expect(getDayOfWeek('12/11/2024')).toBeUndefined();
});
