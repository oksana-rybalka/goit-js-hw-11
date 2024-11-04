import url('./pixabay-api')
import url('./render-functions')

function renderImages(images) {
    const markup = images.map(image => `
        <a href="${image.largeImageURL}" class="gallery-item">
        <img src="${image.webformatURL}" alt="${image.tags}"/>
        <div class="image-info">
        <p>Likes:${image.likes}</p>
        <p>Views:${image.views}</p>
        <p>Comments:${image.comments}</p>
        <p>Downloads:${images.downloads}</p>
        </div>
        </a> `).join("");
    listImg.innerHTML = markup;
    const lightbox = SimpleLightbox('.gallery-item');
    lightbox.refresh();   
    }