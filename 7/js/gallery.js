import {openBigPicture} from './big-picure.js';
import {openModal} from './modal.js';
import {renderElements} from './renderer.js';
import {createPictureElement} from './picture.js';

const galleryElement = document.querySelector('.pictures');

function onGalleryClick (pictures, evt) {
  const pictureElement = evt.target.closest('.picture');
  if (pictureElement) {
    const imageElement = pictureElement.querySelector('img');
    const src = imageElement.attributes.src.value;
    const picture = pictures.find((photo) => photo.url === src);
    openBigPicture(picture);
    openModal();
  }
}

function renderGallery (pictures) {
  renderElements(pictures, galleryElement, createPictureElement);
  galleryElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    onGalleryClick(pictures, evt);
  });
}

export {renderGallery};
