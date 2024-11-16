
global.calculateCircle = function (R) {
  if (typeof R !== 'number' || R <= 0) {
    throw new Error('Радиус должен быть положительным числом');
  }

  const circumference = 2 * Math.PI * R;
  const area = Math.PI * R ** 2;

  return { circumference, area };
};
