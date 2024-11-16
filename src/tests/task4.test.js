const getMinutesSinceStartOfDay = require('./task4');

// Мокаем (mock) объект Date, чтобы контролировать текущее время
beforeAll(() => {
  jest.spyOn(global, 'Date').mockImplementation(() => {
    return new Date('2024-11-15T14:30:00Z');
  });
});

afterAll(() => {
  // Восстанавливаем оригинальную реализацию Date
  global.Date.mockRestore();
});

test('Рассчитывает количество минут с начала дня', () => {
  const result = getMinutesSinceStartOfDay();
  expect(result).toBe(870); // 14 часов и 30 минут = 870 минут
});
