import {renderElements} from './renderer.js';
import {deleteComments, createCommentElement} from './comments.js';
import {COMMENTS_UPLOAD_STEP} from './consts.js';
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
const showMoreElement = bigPictureElement.querySelector('.comments-loader');

let pictureComments = [];
let shownCount = 0;


function openBigPicture (picture) {
  const {url, description, likes, comments} = picture;
  imageElement.src = url;
  likesCountElement.textContent = likes;
  captionElement.textContent = description;

  pictureComments = comments.slice();
  shownCount = comments.length >= COMMENTS_UPLOAD_STEP ? COMMENTS_UPLOAD_STEP : comments.length;
  shownCommentCountElement.textContent = shownCount;
  commentCountElement.textContent = comments.length;

  deleteComments();
  renderElements(comments.slice(0, shownCount), commentListElement, createCommentElement);

  if (comments.length > shownCount) {
    showMoreButton();
  } else {
    hideMoreButton();
  }

  bigPictureElement.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
}

function onMoreButtonClick () {
  const comments = pictureComments.slice(shownCount, shownCount + COMMENTS_UPLOAD_STEP);
  renderElements(comments, commentListElement, createCommentElement);
  shownCount += comments.length;
  shownCommentCountElement.textContent = shownCount;

  if (shownCount === pictureComments.length) {
    hideMoreButton();
  }
}

function showMoreButton () {
  showMoreElement.classList.remove('hidden');
  showMoreElement.addEventListener('click', onMoreButtonClick);
}

function hideMoreButton () {
  showMoreElement.classList.add('hidden');
  showMoreElement.removeEventListener('click', onMoreButtonClick);
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
