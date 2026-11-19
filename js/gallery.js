// Функция, отвечающая за отрисовку миниатюр
function renderGallery (photos, container) {
  const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const galleryFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const {url, description, likes, comments} = photo;
    const photoElement = photoTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__img').alt = description;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.length;

    galleryFragment.append(photoElement);
  });

  container.append(galleryFragment);
}

export {renderGallery};
