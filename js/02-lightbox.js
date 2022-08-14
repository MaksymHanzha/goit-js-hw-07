import { galleryItems } from "./gallery-items.js";
// Change code below this line

// ------------- Розмітка галереї -------------------

const gallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
gallery.innerHTML = galleryMarkup;
var lightbox = new SimpleLightbox(".gallery a", {
  nav: true,
  captions: true,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

function createGalleryMarkup(gallery) {
  return gallery
    .map(
      ({ preview, original, description }) =>
        `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a> `
    )
    .join("");
}
