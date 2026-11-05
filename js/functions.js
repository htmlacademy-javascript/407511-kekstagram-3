/* Функция для проверки длины строки - сравнивает с максимальной длиной и возвращает true, если строка меньше или равна указанной длине, и false, если строка длиннее.*/
const checkStringLength = (string, maxLength) => string.length <= maxLength;
checkStringLength('проверяемая строка', 20);

// Функция для проверки, является ли строка палиндромом
const isPalindrome = (string) => {
  const original = string.replaceAll(' ', '').toLowerCase();
  let reversed = '';
  for (let i = original.length - 1; i >= 0; i--) {
    reversed += original[i];
  }

  return original === reversed;
};

isPalindrome('Лёша на полке клопа нашёл ');


/* Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN: */

const extractNumber = (string) => {
  const original = string.toString();
  let result = '';

  for (let i = 0; i <= original.length; i++) {
    const symbol = parseInt(original[i], 10);

    if (!Number.isNaN(symbol)) {
      result += symbol.toString();
    }
  }

  return result ? +result : NaN;
};

extractNumber('2023 год'); // 2023
extractNumber('а я томат'); // NaN
extractNumber(1.5); // 15
