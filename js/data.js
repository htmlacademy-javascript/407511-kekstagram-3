import {getRandomInteger, getRandomArrElement, createIdGenerator} from './util.js';
import {PHOTO_COUNT, CommentCount, Likes, AvatarId, PhotoId, CommentId, CommentLength, DescriptionLength, NAMES, DESCRIPTION_MOCK, COMMENT_MOCK} from './consts.js';

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

// Создает генератор id карточки фотографии
const generatePhotoId = createIdGenerator(PhotoId.MIN, PhotoId.MAX);

// Создает генератор id комментария
const generateCommentId = createIdGenerator(CommentId.MIN, CommentId.MAX);

function createComment () {
  return {
    id: generateCommentId(),
    avatar: `img/avatar-${getRandomInteger(AvatarId.MIN, AvatarId.MAX)}.svg`,
    message: generateRandomText(COMMENT_MOCK, getRandomInteger(CommentLength.MIN, CommentLength.MAX)),
    name: getRandomArrElement(NAMES),
  };
}

function createPhoto () {
  const id = generatePhotoId();
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: generateRandomText(DESCRIPTION_MOCK, getRandomInteger(DescriptionLength.MIN, DescriptionLength.MAX)),
    likes: getRandomInteger(Likes.MIN, Likes.MAX),
    comments: Array.from({length: getRandomInteger(CommentCount.MIN, CommentCount.MAX)}, createComment)
  };
}

function createPhotos () {
  return Array.from({length: PHOTO_COUNT}, createPhoto);
}

export {createPhotos};
