
function renderElements (elements, container, cb) {
  const fragment = document.createDocumentFragment();
  elements.forEach((element) => fragment.append(cb(element)));
  container.append(fragment);
}

export {renderElements};
