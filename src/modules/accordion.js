export const accordion = () => {
  const titles = document.querySelectorAll('.element__title');
  const contents = document.querySelectorAll('.element__content');

  titles.forEach(title => {
    title.addEventListener('click', () => {
      const activeContent = document.querySelector('#' + title.dataset.tab);

      if (activeContent.classList.contains('active')) {
        activeContent.classList.remove('active');
        title.classList.remove('active');
        activeContent.style.maxHeight = 0;
      }else {
        contents.forEach(content => {
          content.classList.remove('active');
          content.style.maxHeight = 0;
        });

        titles.forEach(element => {
          element.classList.remove('active');
        });

        title.classList.add('active');
        activeContent.classList.add('active');
        activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
      }
    });
  });
  document.querySelector('[data-tab="tab-1"]').classList.add('active');
  document.querySelector('#tab-1').classList.add('active');
  document.querySelector('#tab-1').style.maxHeight = document.querySelector('#tab-1').scrollHeight + 'px';

};
