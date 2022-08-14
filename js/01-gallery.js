import { galleryItems } from "./gallery-items.js";
// Change code below this line

// ------------- Розмітка галереї -------------------

const gallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
gallery.innerHTML = galleryMarkup;

function createGalleryMarkup(gallery) {
  return gallery
    .map(
      ({ preview, original, description }) =>
        `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li> `
    )
    .join("");
}

// ------------- Функція відслідковування кліку на зображення ----------

gallery.addEventListener("click", openBigImage);

function openBigImage(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") return;

  //   console.log(e.target.dataset.source);
  const bigImageUrl = e.target.dataset.source;
  openModal(bigImageUrl);
}

// ------------- Функція відкриття та закриття модального вікна ----------

function openModal(url) {
  const image = basicLightbox.create(
    `
    <img src=${url}>`,
    {
      onShow: () => document.addEventListener("keydown", onKeydown),
      onClose: () => document.removeEventListener("keydown", onKeydown),
    }
  );
  image.show();

  function onKeydown({ key }) {
    if (key === "Escape") {
      image.close();
    }
  }
}
