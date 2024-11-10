export const modal = () => {
  const callbackBtn = document.getElementById('callback-btn');

  const modalOverlay = document.querySelector('.modal-overlay');
  const modalCallback = document.querySelector('.modal-callback');

  callbackBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'block';
    modalCallback.style.display = 'block';
  });

  modalCallback.addEventListener('click', ({target}) => {
    console.log(target);
    if (
			target.closest('#btn-close')
		) {
			modalOverlay.style.display = 'none';
			modalCallback.style.display = 'none';
		}
  });

  window.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
      modalOverlay.style.display = 'none';
      modalCallback.style.display = 'none';
    }
  });

};
