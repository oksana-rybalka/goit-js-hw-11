import{S as m,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",f="46841046-91a9933b60f500c097f960e29";function p(n){const r=new URLSearchParams({key:f,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}),o=`${d}?${r}`;return fetch(o).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}const g=document.querySelector(".list-img"),h=new m(".img-link",{captions:!0,captionsData:"alt",captionDelay:250});function y(n){const r=n.map(({largeImageURL:o,webformatURL:i,tags:e,likes:t,views:s,comments:l,downloads:u})=>`<li class="list-img-item">
        <a href="${o}" class="img-link">
        <img src="${i}" alt="${e}" width="360"/>
        <div class="image-info">
        <p>Likes:${t}</p>
        <p>Views:${s}</p>
        <p>Comments:${l}</p>
        <p>Downloads:${u}</p>
        </div>
        </a>
    </li> `).join("");g.insertAdjacentHTML("beforeend",r),h.refresh()}const L=document.querySelector(".form-img"),S=document.querySelector(".input-img"),c=document.querySelector(".loader");L.addEventListener("submit",w);function w(n){n.preventDefault();const r=S.value.trim();if(c.classList.remove("hidden"),r==="")return a.warning({position:"topCenter",title:"Warning!",message:"Please enter a search term!"});p(r).then(({hits:o})=>{c.classList.add("hidden"),o.length===0?a.warning({position:"topCenter",title:"No results!",message:"Sorry, there are no images matching your search query. Please try again!"}):y(o)})}
//# sourceMappingURL=index.js.map
