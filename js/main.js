const PHOTO_COUNT = 25;
const COMMENT_COUNT = 30;

const NAMES = [
  'Алдуин',
  'Партурнакс',
  'Одавинг',
  'Эсберн',
  'Дельфина',
  'Арнгейр',
  'Бомбур',
  'Вульфхарт',
  'Исграмор',
  'Потема',
  'Пелинал',
  'Алессия',
  'Реман',
  'Тайбер',
  'Зурин',
  'Джагар',
  'Мерунес',
  'Шеогорат',
  'Азура',
  'Ноктюрнал',
  'Хермеус',
  'Клавикус',
  'Малакат',
  'Боэтия',
  'Мефала'
];

const DESCRIPTION_MOCK = 'Громко мяукать в три часа ночи, требуя открыть закрытую дверь, а затем передумать и уйти. Скинуть кружку со стола лапой, внимательно наблюдая за падением. Лежать на клавиатуре ноутбука, пока человек пытается работать. Вылизывать заднюю лапу с максимально серьезным выражением морды. Бегать по квартире с выпученными глазами без видимой причины, врезаясь в косяки. Увидеть дно миски, хотя по краям еще полно корма, и устроить голодный обморок. Залезть в самую маленькую картонную коробку, которая явно не подходит по размеру. Точить когти об новый диван, игнорируя дорогую когтеточку рядом. Долго смотреть в пустой угол стены, заставляя хозяев нервничать. Принести игрушечную мышь в кровать в качестве трофея. Свернуться калачиком на чистой стопке только что выглаженного белья. Внезапно уснуть в самой неудобной позе, свесив голову с края подоконника. Шипеть на пылесос, но проявлять крайний интерес к шуршащему пакету из магазина.';

const COMMENT_MOCK = `Всё отлично!
В целом всё неплохо. Но не всё.
Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.
Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.
Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.
Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!`;


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

function generateRandomText (text, sentencesCount) {
  // Разбиение по знакам препинания и символам переноса строки
  const sentences = text.split(/(?<=[.!?])\s+|[\r\n]+/);
  const result = [];
  while (result.length < sentencesCount) {
    let sentence = getRandomArrElement(sentences);
    if (result.includes(sentence)) {
      sentence = getRandomArrElement(sentences);
    }
    result.push(sentence);
  }
  return result.join(' ');
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
// Создает генератор id карточки фотографии
const generatePhotoId = createIdGenerator(1, PHOTO_COUNT);

// Создает генератор id комментария
const generateCommentId = createIdGenerator(1, 750);

function createComment () {
  return {
    id: generateCommentId(),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,// Случайное число от 1 до 6.
    message: generateRandomText(COMMENT_MOCK, getRandomInteger(1, 2)),
    name: getRandomArrElement(NAMES),
  };
}

function createPhoto () {
  const id = generatePhotoId();
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: generateRandomText(DESCRIPTION_MOCK, getRandomInteger(1, 3)),
    likes: getRandomInteger(15, 200),// Случайное число от 15 до 200.
    comments: Array.from({length: getRandomInteger(0, COMMENT_COUNT)}, createComment)
  };
}

const photos = Array.from({length: PHOTO_COUNT}, createPhoto);

// eslint-disable-next-line no-console
console.log(photos);
