import iziToast from "izitoast";

const BASE_URL = "https://pixabay.com/ru/images/search/user";
const API_KEY = "46841046";
const url ='${BASE_URL}?key=${API_KEY}&q={inputValue}&image_type=photo&orientation=horizontal&safesearch=true' 

return fetchImage(url)
.then(response => response.json())
.then(data => data.hits)
.catch(error => {
    iziToast.error({
        title:"Error!",
        message:"Sorry, there are no images matching your search query. Please try again!"
    });
    return[];
       })