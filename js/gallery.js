function createPhotoElement (photo) {
  const {url, description, likes, comments} = photo;
  const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const photoElement = photoTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__img').alt = description;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  return photoElement;
}

function renderGallery (photos, container) {
  const galleryFragment = document.createDocumentFragment();
  photos.forEach((photo) => galleryFragment.append(createPhotoElement(photo)));
  container.append(galleryFragment);
}

export {renderGallery};
