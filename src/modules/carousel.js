export const carousel = () => {
  const wrapper = document.querySelector('.services-elements');
  const arrowBtns = document.querySelectorAll('.arrow');
  const carousel = document.querySelector('.services-carousel');
  const firstCardWidth = carousel.querySelector('.element').offsetWidth;
  const carouselChildren = [...carousel.children];

  let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

  carouselChildren.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML('afterbegin',card.outerHTML);
  });

  carouselChildren.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML('beforeend',card.outerHTML);
  });

  let isDragging = false, startX, startScrollLeft, timeoutId;

  arrowBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      carousel.scrollLeft += btn.id === 'left' ? -firstCardWidth : firstCardWidth;
    });
  });

  const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add('dragging');
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
  };

  const dragStop = () => {
		isDragging = false;
		carousel.classList.remove('dragging');
	};

  const autoPlay = () => {
    if (window.innerWidth < 800) return;
    timeoutId = setTimeout(() =>
      carousel.scrollLeft += firstCardWidth, 2500);
  }

  autoPlay();

  const infiniteScroll = () => {
    if (carousel.scrollLeft === 0) {
      carousel.classList.add('no-transition');
      carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
      carousel.classList.remove('no-transition');
    }else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
      carousel.classList.add('no-transition');
      carousel.scrollLeft = carousel.offsetWidth;
      carousel.classList.remove('no-transition');
    }
    clearTimeout(timeoutId);
    if (!wrapper.matches(':hover')) autoPlay();
  };

  carousel.addEventListener('mousedown', dragStart);
  carousel.addEventListener('mousemove', dragging);
  document.addEventListener('mouseup', dragStop);
  carousel.addEventListener('scroll', infiniteScroll);
  wrapper.addEventListener('mouseenter', () => clearTimeout(timeoutId));
  wrapper.addEventListener('mouseleave', autoPlay);
};
