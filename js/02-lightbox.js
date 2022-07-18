import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery')


const galleryMarkup = galleryItems.map(({preview, original, description})=> {
    return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
}).join('')

galleryRef.innerHTML = galleryMarkup;

galleryRef.addEventListener('click', event => {
    event.preventDefault();
})

let lightBox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250});
console.log(galleryItems);
