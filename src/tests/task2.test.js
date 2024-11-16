describe('Тестирование функции calculateCircle', () => {
  describe('Корректные вычисления', () => {
    test('Рассчитывает окружность и площадь для радиуса 3', () => {
      const result = calculateCircle(3);
      expect(result.circumference).toBeCloseTo(18.85, 2);
      expect(result.area).toBeCloseTo(28.27, 2);
    });

    test('Рассчитывает окружность и площадь для радиуса 5', () => {
      const result = calculateCircle(5);
      expect(result.circumference).toBeCloseTo(31.42, 2);
      expect(result.area).toBeCloseTo(78.54, 2);
    });
  });
});
