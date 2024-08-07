const headerBurger = document.querySelector('.burger')
const headerMenu = document.querySelector('.header_menu')
const body = document.body

headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('active')
    headerMenu.classList.toggle('active')
    body.classList.toggle('locked')
})

/*const items = document.querySelectorAll('.creation_content_item');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {                
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

items.forEach(item => {
    observer.observe(item);
});*/
const watchButton = document.querySelector('.watch_button');

  watchButton.addEventListener('click', () => {
    window.scrollBy({
      top: window.innerHeight * 0.8,
      behavior: 'smooth'
    });
  });
//offers
const offersFronts = document.getElementsByClassName('offers_content_item');
  const offersContents = document.getElementsByClassName('offers_content_item_form');
  const offersContentsClose = document.getElementsByClassName('close');

  for (let i = 0; i < offersFronts.length; i++) {
    offersFronts[i].addEventListener('click', () => {
      offersContents[i].classList.add('active');
      body.classList.add('locked')
    });
  }

  for (let i = 0; i < offersContentsClose.length; i++) {
    offersContentsClose[i].addEventListener('click', () => {
      offersContents[i].classList.remove('active');
      body.classList.remove('locked')
    });
  }