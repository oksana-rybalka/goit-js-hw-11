import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css'

const listImage = document.querySelector('.list-img');
 const lightbox = new SimpleLightbox('.img-link', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
    });

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
        <a href="${largeImageURL}" class="img-link">
        <img src="${webformatURL}" alt="${tags}" width="360"/>
        <div class="image-info">
        <p>Likes:${likes}</p>
        <p>Views:${views}</p>
        <p>Comments:${comments}</p>
        <p>Downloads:${downloads}</p>
        </div>
        </a>
    </li> `).join('');

    listImage.insertAdjacentHTML('beforeend', markup);
   
    lightbox.refresh();
}
export { renderImages };