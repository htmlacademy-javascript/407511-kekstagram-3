import {createPhotos} from './data.js';
import {renderGallery} from './gallery.js';

const galleryElement = document.querySelector('.pictures');
renderGallery(createPhotos(), galleryElement);
