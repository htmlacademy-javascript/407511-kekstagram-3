const commentListElement = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('.social__comment');

function createCommentElement (comment) {
  const {avatar, message, name} = comment;
  const commentElement = commentTemplate.cloneNode(true);
  commentElement.querySelector('.social__picture').src = avatar;
  commentElement.querySelector('.social__picture').alt = name;
  commentElement.querySelector('.social__text').textContent = message;
  return commentElement;
}

function deleteComments () {
  commentListElement.innerHTML = '';
}

export {deleteComments, createCommentElement};
