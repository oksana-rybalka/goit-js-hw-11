import iziToast from "izitoast";
import { inputValue } from "./main.js";

    const BASE_URL = "https://pixabay.com/ru/images/search/user";
    const API_KEY = "46841046-91a9933b60f500c097f960e29";
    
 function fetchImages() {
    const params = new URLSearchParams({
        keys: API_KEY,
        q: inputValue,
        image_type: photo,
        orientation: horizontal,
        safesearch: true,

    })
    const url = `${BASE_URL}?${params}`

    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            } return response.json();
        })

}
export { fetchImages };