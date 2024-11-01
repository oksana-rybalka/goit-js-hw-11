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

    searchBtn.disabled = false;
    let specifiedSearch = event.currentTarget.value.trim();

    specifiedSearch !== " " ? searchImg()
        // запускай функцію,яка знаходитиме по запиту фото
        : return searchBtn.disabled = true
});
