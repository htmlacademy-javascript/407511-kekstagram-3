
// Генерирует случайное целое число в интерале от min (включительно) до max(включительно)
function getRandomInteger (a, b) {
  const min = Math.ceil(Math.min(a, b));
  const max = Math.floor(Math.max((a, b)));
  const result = Math.random() * (max - min + 1) + min;
  return Math.floor(result);
}

function getRandomArrElement (elements) {
  return elements[getRandomInteger(0, elements.length - 1)];
}

// Функция-генератор для получения уникальных идентификаторов
function createIdGenerator (min, max) {
  const previousIds = [];

  return function () {
    let id = getRandomInteger(min, max);
    if (previousIds.length > (max - min)) {
      // eslint-disable-next-line no-console
      console.error(`Перебраны все числа из диапазона от ${min} до ${max}`);
      return null;
    }
    while (previousIds.includes(id)) {
      id = getRandomInteger(min, max);
    }
    previousIds.push(id);
    return id;
  };
}

export {getRandomArrElement, getRandomInteger, createIdGenerator};
