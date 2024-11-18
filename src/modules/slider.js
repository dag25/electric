export const topSlider = () => {
  const slider = document.querySelector('.top-slider');
  const slides = slider.querySelectorAll('.item');
  const dots = document.querySelectorAll('.dot');

  const timeInterval = 3000;
	let currentSlide = 0;
	let interval;

  const prevSlide = (elems, index, strClass) => {
		elems[index].classList.remove(strClass);
	};
	const nextSlide = (elems, index, strClass) => {
		elems[index].classList.add(strClass);
	};

  const autoSlide = () => {
		prevSlide(slides, currentSlide, 'item--active');
		prevSlide(dots, currentSlide, 'dot--active');
		currentSlide++;

		if (currentSlide >= slides.length) {
			currentSlide = 0;
		}

		nextSlide(slides, currentSlide, 'item--active');
		nextSlide(dots, currentSlide, 'dot--active');
	};

  const startSlide = (timer = 1500) => {
		interval = setInterval(autoSlide, timer);
	};
	const stopSlide = () => {
		clearInterval(interval);
	};

  slider.addEventListener('click', e => {
		e.preventDefault();
		if (!e.target.matches('.dot, .top-slider__btn')) {
			return;
		}
		prevSlide(slides, currentSlide, 'item--active');
		prevSlide(dots, currentSlide, 'dot--active');

		if (e.target.matches('#arrow-right')) {
			currentSlide++;
		} else if (e.target.matches('#arrow-left')) {
			currentSlide--;
		} else if (e.target.classList.contains('dot')) {
			dots.forEach((dot, index) => {
				if (dot === e.target) {
					currentSlide = index;
				}
			});
		}
		if (currentSlide >= slides.length) {
			currentSlide = 0;
		}
		if (currentSlide < 0) {
			currentSlide = slides.length - 1;
		}
		nextSlide(slides, currentSlide, 'item--active');
		nextSlide(dots, currentSlide, 'dot--active');
	});

  slider.addEventListener(
		'mouseenter',
		e => {
			if (e.target.matches('.dot, .top-slider__btn')) {
				stopSlide();
			}
		},
		true,
	);
	slider.addEventListener(
		'mouseleave',
		e => {
			if (e.target.matches('.dot, .top-slider__btn')) {
				startSlide(timeInterval);
			}
		},
		true,
	);

  startSlide(timeInterval);
};
