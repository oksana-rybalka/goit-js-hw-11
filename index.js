import{S as m,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/",p="46841046-91a9933b60f500c097f960e29";function h(o){const i=new URLSearchParams({key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),r=`${f}?${i}`;return fetch(r).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).catch(s=>console.log(s))}const g=document.querySelector(".list-img"),y=new m(".img-link",{captions:!0,captionsData:"alt",captionDelay:250});function v(o){const i=o.map(({largeImageURL:r,webformatURL:s,tags:e,likes:t,views:n,comments:d,downloads:u})=>`<li class="list-img-item">
      <a href="${r}" class="img-link">
      <img src="${s}" alt="${e}" width="100%"/>
       <div class="image-info">
        <div class="text-info-item">
          <h2 class="title">Likes</h2>
          <p class="data-title">${t}</p>
        </div>
        <div class="text-info-item"
          <h2 class="title">Views</h2>
          <p class="data-title">${n}</p>
        </div>
        <div class="text-info-item">
          <h2 class="title">Comments</h2>
          <p class="data-title">${d}</p>
        </div>
        <div class="text-info-item">
          <h2 class="title">Downloads</h2>
          <p class="data-title">${u}</p>
        </div>
      </div>
        </a>
    </li> `).join("");g.insertAdjacentHTML("beforeend",i),y.refresh()}const l=document.querySelector(".form-img"),L=document.querySelector(".input-img"),S=document.querySelector(".list-img"),a=document.querySelector(".loader");l.addEventListener("submit",b);function b(o){o.preventDefault();const i=L.value.trim();if(a.classList.remove("hidden"),l.reset(),S.innerHTML="",i==="")return a.classList.add("hidden"),c.warning({position:"topCenter",title:"Warning!",message:"Please enter a search term!",backgroundColor:"#ef3040"});h(i).then(({hits:r})=>{a.classList.add("hidden"),r.length===0?c.warning({position:"topCenter",title:"No results!",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef3040"}):v(r)})}
//# sourceMappingURL=index.js.map
