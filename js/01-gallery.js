import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery')


const galleryMarkup = galleryItems.map(({preview, original, description})=> {
    return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
}).join('')

galleryRef.innerHTML = galleryMarkup;

let imgMainLink = ''

galleryRef.addEventListener('click', event => { 
      event.preventDefault();
    
  imgMainLink = event.target.dataset.source;
  
  const instance = basicLightbox.create(`
      <img src="${imgMainLink}">`, {
      onShow:(instance) => {window.addEventListener('keydown', openInstance)},
      onClose:(instance) => {window.removeEventListener('keydown', openInstance)}
  })
      instance.show()

  function openInstance(event) {
      if (event.code === 'Escape') {
      instance.close()
      }
    }
  }
)


