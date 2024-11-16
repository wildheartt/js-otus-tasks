const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern =
  /^(\+\d{1,3})?\s?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;
const userInput = 'ваша_строка';
const isDate = datePattern.test(userInput);
const isEmail = emailPattern.test(userInput);
const isPhone = phonePattern.test(userInput);

if (isDate) {
  console.log('Введенная строка является датой.');
} else if (isEmail) {
  console.log('Введенная строка является адресом электронной почты.');
} else if (isPhone) {
  console.log('Введенная строка является номером телефона.');
} else {
  console.log('Строка не соответствует ни одному из шаблонов.');
}
