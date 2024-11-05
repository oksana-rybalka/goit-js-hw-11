import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchImages } from "./js/pixabay-api";
import { renderImages } from "./js/render-functions";

const formImg = document.querySelector('.form-img');
const inputImg = document.querySelector('.input-img');

const listImg = document.querySelector('.list-img');
const loader = document.querySelector('.loader')

loader.style.display = 'none';
formImg.addEventListener("submit", handleSearch)
    
function handleSearch(event) {
    event.preventDefault();
    const inputValue = inputImg.value.trim();

    console.log(inputValue);
    if (inputValue === "") {
        return iziToast.warning({
            position: "topCenter",
            title: 'Warning!',
            message: 'Please enter a search term!',
        });
        
    }else{
        loader.style.display = 'block';
        fetchImages()
        .then((images) => {
            if (images.length === 0) {
                iziToast.warning({
                    position: "topCenter",
                    title: "No results!",
                    message: "Sorry, there are no images matching your search query. Please try again!",

                });
            } else {
             
                renderImages(images);
            }
        })
    loader.style.display = 'none';
    }  
   



      
    

    
  

