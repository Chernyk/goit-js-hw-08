import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryEl = document.querySelector('.gallery');

function newGallary(image) {
  return image
    .map(({ original, preview, description }) => {
      return `<a class="gallery__link" href="${original}">
         <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
         />
        </a>`;
    })
    .join('');
}
galleryEl.insertAdjacentHTML('beforeend', newGallary(galleryItems));

const instance = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});
