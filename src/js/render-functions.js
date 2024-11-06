import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css'

const listImages = document.querySelector('.list-img');
 const lightbox = new SimpleLightbox('.img-link', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
    });

function renderImages({ images }) {
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
        <p class="text-info"><b class="title-text-info">Views:</b>${views}</p>
        <p class="text-info"><b class="title-text-info">Likes:<b>${likes}</p>
        <p class="text-info"><b class="title-text-info">Comments:<b>${comments}</p>
        <p class="text-info"><b class="title-text-info">Downloads:<b>${downloads}</p>
        </div>
        </a>
    </li> `).join('');

    listImage.insertAdjacentHTML('beforeend', markup);
    
    lightbox.refresh();
}
export { renderImages };