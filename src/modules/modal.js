


export const modal = () => {
	const callbackBtns = document.querySelectorAll('.callback-btn');
	const statusBlock = document.querySelector('#responseMessage');

	const modalOverlay = document.querySelector('.modal-overlay');
	const modalCallback = document.querySelector('.modal-callback');

  callbackBtns.forEach(btn => {
    btn.addEventListener('click', () => {
			modalOverlay.style.display = 'block';
			modalCallback.style.display = 'block';
		});
  });



	modalCallback.addEventListener('click', ({ target }) => {
		if (target.closest('#btn-close')) {
			modalOverlay.style.display = 'none';
			modalCallback.style.display = 'none';
		}
		if (target.closest('.feedback')) {
			modalCallback.style.display = 'none';
			statusBlock.style.display = 'block';
		}
	});

	statusBlock.addEventListener('click', ({target}) => {
		if (target.closest('.btn')) {
      statusBlock.style.display = 'none';
			modalOverlay.style.display = 'none';
    }
	});

	window.addEventListener('click', event => {
		if (event.target === modalOverlay) {
			modalOverlay.style.display = 'none';
			modalCallback.style.display = 'none';
			statusBlock.style.display = 'none';
		}
	});
};
