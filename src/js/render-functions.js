import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css'

 function renderImages(images) {
    const markup = images
        .map(
            ({
                largeImageURL,
                webformatURL,
                tags,
                likes,
                views,
                comments,
                downloads,
            }) =>
                `<li class="list-img-item">
        <a href="${image.largeImageURL}" class="img-link">
        <img src="${image.webformatURL}" alt="${image.tags}" width="360"/>
        <div class="image-info">
        <p>Likes:${image.likes}</p>
        <p>Views:${image.views}</p>
        <p>Comments:${image.comments}</p>
        <p>Downloads:${images.downloads}</p>
        </div>
        </a>
    </li> `).join('');

    listImage.insertAdjacentHTML('beforeend', markup);
   
    const lightbox = new SimpleLightbox('.img-link', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
    });
    lightbox.refresh();
}
export {renderImages}