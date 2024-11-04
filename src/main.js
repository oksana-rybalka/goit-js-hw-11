import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const formImg = document.querySelector('.form-img');
const inputImg = document.querySelector('.input-img');
const searchBtn = document.querySelector('.btn');
const listImg = document.querySelector('.list-img')

formImg.addEventListener("submit", (event) => {
    event.preventDefault();
    handleSearch();
});
    
function handleSearch() {
    searchBtn.disabled = false;
    const inputValue = inputImg.value.trim();
    if (!inputValue) {
        iziToast.warning({
            title: "Warning!",
            message: "Please enter a search term!"
        });
        return;
    }
       
    searchBtn.disabled = true;
    listImg.innerHTML = "";
    document.body.classList.add("loading");
} 

fetchImages(url)
        .then(images => {
            document.body.classList.remove("loading");
            searchBtn.disabled = false;
            if (images.length === 0) {
                iziToast.info({
                    title: "No Results",
                    message: "Sorry,there are no images matching your search query. Please try again!"
                })
            } else {
                renderImage(images);
            }
        })
      
    

    
  

