import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchImages } from "./js/pixabay-api";
import { renderImages } from "./js/render-functions";


const formImg = document.querySelector('.form-img');
const inputImg = document.querySelector('.input-img');

const loader = document.querySelector('.loader')


formImg.addEventListener("submit", handleSearch)
    
function handleSearch(event) {
    event.preventDefault();
    const inputValue = inputImg.value.trim();
    loader.classList.remove("hidden");
    
    if (inputValue === "") {
        return iziToast.warning({
            position: "topCenter",
            title: 'Warning!',
            message: 'Please enter a search term!',
        });
        
    } else {
        
        fetchImages(inputValue)
            .then(({ hits }) => {
                loader.classList.add("hidden");
                if (hits.length === 0) {
                    iziToast.warning({
                        position: "topCenter",
                        title: "No results!",
                        message: "Sorry, there are no images matching your search query. Please try again!",

                    });
                } else {
             
                    renderImages(hits);
                    
                }
            })
    
    }
}    
  

