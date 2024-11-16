const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern =
  /^(\+\d{1,3})?\s?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;

test('Дата соответствует шаблону', () => {
  expect(datePattern.test('12/11/2024')).toBe(true);
  expect(datePattern.test('31/02/2024')).toBe(true);
  expect(datePattern.test('invalid date')).toBe(false);
});

test('Email соответствует шаблону', () => {
  expect(emailPattern.test('test@example.com')).toBe(true);
  expect(emailPattern.test('user@domain.co.uk')).toBe(true);
  expect(emailPattern.test('not-an-email')).toBe(false);
});

test('Номер телефона соответствует шаблону', () => {
  expect(phonePattern.test('+1 (123) 456-7890')).toBe(true);
  expect(phonePattern.test('123-456-7890')).toBe(true);
  expect(phonePattern.test('123456')).toBe(false);
});
