import {renderComments} from './comments.js';
import {COMMENTS_SHOWN} from './consts.js';
import {closeModal} from './modal.js';
import {isEscapeKey} from './util.js';

const bigPictureElement = document.querySelector('.big-picture');
const closeButtonElement = bigPictureElement.querySelector('.big-picture__cancel');
const imageElement = bigPictureElement.querySelector('.big-picture__img img');
const likesCountElement = bigPictureElement.querySelector('.likes-count');
const commentCountElement = bigPictureElement.querySelector('.social__comment-total-count');
const shownCommentCountElement = bigPictureElement.querySelector('.social__comment-shown-count');
const captionElement = bigPictureElement.querySelector('.social__caption');
const commentListElement = bigPictureElement.querySelector('.social__comments');

function openBigPicture (picture) {
  const {url, description, likes, comments} = picture;
  imageElement.src = url;
  likesCountElement.textContent = likes;
  shownCommentCountElement.textContent = COMMENTS_SHOWN < comments.length ? COMMENTS_SHOWN : comments.length;
  commentCountElement.textContent = comments.length;
  captionElement.textContent = description;

  renderComments(comments.slice(0, COMMENTS_SHOWN), commentListElement);

  bigPictureElement.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
}

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
    closeModal();
  }
}

function closeBigPicture () {
  bigPictureElement.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
}

function onCloseButtonClick () {
  closeBigPicture();
  closeModal();
}

closeButtonElement.addEventListener('click', onCloseButtonClick);

export {openBigPicture};
