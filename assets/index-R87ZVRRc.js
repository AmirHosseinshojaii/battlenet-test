(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))e(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&e(p)}).observe(document,{childList:!0,subtree:!0});function c(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(l){if(l.ep)return;l.ep=!0;const i=c(l);fetch(l.href,i)}})();const h=document.querySelectorAll(".slide"),q=document.querySelectorAll(".pagination");let n=0;const S=()=>{q.forEach((s,t)=>{t===n?s.style.backgroundColor="#0074e0":s.style.backgroundColor="#85868A"})},r=s=>{h.forEach((t,c)=>{t.style.left=`${(c-s)*100}%`}),S()};r(n);const D=document.querySelector(".slider-btn-next"),$=document.querySelector(".slider-btn-prev"),y=()=>{n===h.length-1?(n=0,r(n)):(n++,r(n))},M=()=>{n===0?(n=h.length-1,r(n)):(n--,r(n))};D.addEventListener("click",()=>{y()});$.addEventListener("click",()=>{M()});setInterval(()=>{y()},4e3);const x=document.querySelectorAll(".mobile-slide"),C=document.querySelectorAll(".mobile-pagination"),f=document.querySelector(".mobile-slider-btn-next"),b=document.querySelector(".mobile-slider-btn-prev");let a=0;const k=()=>{C.forEach((s,t)=>{s.style.backgroundColor=t===a?"#0074e0":"#85868A"})},d=s=>{x.forEach((t,c)=>{t.style.left=`${(c-s)*100}%`}),k()};d(a);const w=()=>{a===x.length-1?a=0:a++,d(a)},A=()=>{a===0?a=x.length-1:a--,d(a)};f&&f.addEventListener("click",w);b&&b.addEventListener("click",A);C.forEach((s,t)=>{s.addEventListener("click",()=>{a=t,d(a)})});setInterval(w,4e3);const E=document.querySelector(".account-menu-btn"),g=document.querySelector(".main-menu"),B=document.querySelector(".game-menu-btn"),v=document.querySelector(".game-menu"),j=document.querySelector(".close-game-menu-btn"),u=document.querySelector(".second-game-menu"),G=document.querySelector(".balance-menu"),L=document.querySelector(".search-shop"),m=document.querySelector(".close-input"),z=document.querySelector("#input-focus"),F=document.querySelectorAll(".mobile-menu-btn");document.querySelector(".pause-btn");document.querySelector(".resume-btn");document.querySelector("#ScrollTop");const T=document.querySelector(".close-menu-btn");let o=null;F.forEach(s=>{s.addEventListener("click",()=>{const t=s.getAttribute("data-submenu"),c=document.querySelector(`.${t}`);o&&o!==c&&o.classList.add("hidden"),c.classList.contains("hidden")?(c.classList.remove("hidden"),o=c):c.classList.add("hidden")})});B.addEventListener("click",()=>{g.classList.add("hidden"),v.classList.toggle("hidden"),u.classList.remove("hidden"),L.classList.add("hidden")});j.addEventListener("click",()=>{document.querySelectorAll("[data-submenu]").forEach(t=>{const c=t.getAttribute("data-submenu"),e=document.querySelector(`.${c}`);e&&e.classList.add("hidden")}),v.classList.add("hidden"),u.classList.add("hidden"),L.classList.remove("hidden")});E.addEventListener("click",()=>{document.querySelectorAll("[data-submenu]").forEach(t=>{const c=t.getAttribute("data-submenu"),e=document.querySelector(`.${c}`);e&&e.classList.add("hidden")}),g.classList.toggle("hidden"),v.classList.add("hidden"),u.classList.add("hidden")});u.addEventListener("click",()=>{G.classList.toggle("hidden")});z.addEventListener("focus",()=>{m.classList.remove("hidden"),m.addEventListener("click",()=>{m.classList.add("hidden")})});T.addEventListener("click",()=>{g.classList.toggle("hidden")});let H=async()=>{let c=(await(await fetch("http://localhost:3000/games")).json()).map(e=>`    <div class="flex flex-col gap-2 relative">
        <img class="w-full h-[156px] object-cover" src="${e.image}" alt="">
        <div class=" h-6 mt-2 flex items-center gap-2 px-6 text-[#C2C2C4] text-[14px]">
          <svg class="w-5 h-5" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" part="icon" aria-hidden="true">
        <style type="text/css">
	        .st0{fill:#2B374C;}
	        .st1{fill:#F4BF2A;}
        </style>
        <g>
	      <circle class="st0" cx="255.7" cy="256.5" r="168"></circle>
	      <path class="st1" d="M466,256.5c0-42.3-13.2-84-36.8-119.4V85.7c0-1.4-1.4-2.8-2.8-2.8h-51.4c-71.5-49.3-165.9-49.3-237.4,0H86.3
		c-0.7,0-1.4,0-2.1,0.7c-0.7,0.7-0.7,1.4-0.7,2.1v50.7c-50,72.2-50,167.3,0,239.5v50.7c0,1.4,1.4,2.8,2.8,2.8h51.4
		c72.2,49.3,166.6,48.6,238.8-0.7h50.7c1.4,0,2.8-1.4,2.8-3.5l0,0v-50.7C453.5,340.5,466,298.9,466,256.5z M73.8,256.5
		c0-100.7,81.2-181.9,181.9-181.9s181.9,81.2,181.9,181.9s-81.2,181.9-181.9,181.9l0,0l0,0C155,438.4,73.8,357.2,73.8,256.5z"></path>
	      <path class="st1" d="M134.9,157.9h68.7c-1.4,7.6-2.1,15.3-2.1,23.6c2.8,30.5,22.9,115.2,22.9,115.2L257,164.9L290.4,294
		c0,0,20.1-113.9,20.1-121.5c-0.7-5.6-3.5-11.1-8.3-14.6h72.9c-9.7,9-16.7,20.1-20.8,33.3c-6.2,25-28.5,151.3-28.5,159
		c0.7,8.3,3.5,16,8.3,22.9h-68c1.4-6.2,2.1-12.5,2.1-18.7c0-11.8-10.4-66.6-10.4-66.6s-13.9,56.9-13.9,67.3c0,6.2,1.4,12.5,4.2,18
		h-68.7c0,0,13.2-9.7,13.2-18.7c-1.4-25.7-37.5-159.7-40.3-170.1C150.1,173.9,143.9,164.2,134.9,157.9z"></path>
      </g>
        </svg>
         <p>${e.gameName}</p> 
     </div> 
     <div class="px-6 ">
      <h2 class="text-[18px] text-[#DCDCDD]">${e.gameTittle}</h2>
        <p class="text-[#ffb400] text-[14px] mt-2">${e.desc}.</p>
     </div> 
     <div class="px-6 text-[#DCDCDD] absolute bottom-6 left-0 font-bold">${e.price}</div>   
    </div>`);document.querySelector("#game-container").insertAdjacentHTML("afterbegin",c.join(""))},N=async()=>{let c=(await(await fetch("http://localhost:3000/FeaturedGames")).json()).map(e=>`    <div class="flex flex-col gap-2 relative">
        <img class="w-full h-[156px] object-cover" src="${e.image}" alt="">
        <div class=" h-6 mt-2 flex items-center gap-2 px-6 text-[#C2C2C4] text-[14px]">
          <svg class="w-5 h-5" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" part="icon" aria-hidden="true">
        <style type="text/css">
	        .st0{fill:#2B374C;}
	        .st1{fill:#F4BF2A;}
        </style>
        <g>
	      <circle class="st0" cx="255.7" cy="256.5" r="168"></circle>
	      <path class="st1" d="M466,256.5c0-42.3-13.2-84-36.8-119.4V85.7c0-1.4-1.4-2.8-2.8-2.8h-51.4c-71.5-49.3-165.9-49.3-237.4,0H86.3
		c-0.7,0-1.4,0-2.1,0.7c-0.7,0.7-0.7,1.4-0.7,2.1v50.7c-50,72.2-50,167.3,0,239.5v50.7c0,1.4,1.4,2.8,2.8,2.8h51.4
		c72.2,49.3,166.6,48.6,238.8-0.7h50.7c1.4,0,2.8-1.4,2.8-3.5l0,0v-50.7C453.5,340.5,466,298.9,466,256.5z M73.8,256.5
		c0-100.7,81.2-181.9,181.9-181.9s181.9,81.2,181.9,181.9s-81.2,181.9-181.9,181.9l0,0l0,0C155,438.4,73.8,357.2,73.8,256.5z"></path>
	      <path class="st1" d="M134.9,157.9h68.7c-1.4,7.6-2.1,15.3-2.1,23.6c2.8,30.5,22.9,115.2,22.9,115.2L257,164.9L290.4,294
		c0,0,20.1-113.9,20.1-121.5c-0.7-5.6-3.5-11.1-8.3-14.6h72.9c-9.7,9-16.7,20.1-20.8,33.3c-6.2,25-28.5,151.3-28.5,159
		c0.7,8.3,3.5,16,8.3,22.9h-68c1.4-6.2,2.1-12.5,2.1-18.7c0-11.8-10.4-66.6-10.4-66.6s-13.9,56.9-13.9,67.3c0,6.2,1.4,12.5,4.2,18
		h-68.7c0,0,13.2-9.7,13.2-18.7c-1.4-25.7-37.5-159.7-40.3-170.1C150.1,173.9,143.9,164.2,134.9,157.9z"></path>
      </g>
        </svg>
         <p class="leading-tight">${e.gameName}</p> 
     </div> 
     <div class="px-6 ">
      <h2 class="text-[18px] text-[#DCDCDD]">${e.gameTittle}</h2>
        <p class="text-[#ffb400] text-[14px] mt-2">${e.desc}.</p>
        <p class="mt-1 text-[12px] text-[#C2C2C4]">${e.anything}</p>
     </div> 
     <div class="px-6 text-[#DCDCDD] absolute bottom-4 left-0 font-bold">${e.price}</div>   
    </div>`);document.querySelector("#Featured-Game-container").insertAdjacentHTML("afterbegin",c.join(""))},O=async()=>{let c=(await(await fetch("http://localhost:3000/TrendGames")).json()).map(e=>`    <div class="flex flex-col gap-2 relative">
        <img class="w-full h-[156px] object-cover" src="${e.image}" alt="">
        <div class=" h-6 mt-2 flex items-center gap-2 px-6 text-[#C2C2C4] text-[14px]">
          <svg class="w-5 h-5" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" part="icon" aria-hidden="true">
        <style type="text/css">
	        .st0{fill:#2B374C;}
	        .st1{fill:#F4BF2A;}
        </style>
        <g>
	      <circle class="st0" cx="255.7" cy="256.5" r="168"></circle>
	      <path class="st1" d="M466,256.5c0-42.3-13.2-84-36.8-119.4V85.7c0-1.4-1.4-2.8-2.8-2.8h-51.4c-71.5-49.3-165.9-49.3-237.4,0H86.3
		c-0.7,0-1.4,0-2.1,0.7c-0.7,0.7-0.7,1.4-0.7,2.1v50.7c-50,72.2-50,167.3,0,239.5v50.7c0,1.4,1.4,2.8,2.8,2.8h51.4
		c72.2,49.3,166.6,48.6,238.8-0.7h50.7c1.4,0,2.8-1.4,2.8-3.5l0,0v-50.7C453.5,340.5,466,298.9,466,256.5z M73.8,256.5
		c0-100.7,81.2-181.9,181.9-181.9s181.9,81.2,181.9,181.9s-81.2,181.9-181.9,181.9l0,0l0,0C155,438.4,73.8,357.2,73.8,256.5z"></path>
	      <path class="st1" d="M134.9,157.9h68.7c-1.4,7.6-2.1,15.3-2.1,23.6c2.8,30.5,22.9,115.2,22.9,115.2L257,164.9L290.4,294
		c0,0,20.1-113.9,20.1-121.5c-0.7-5.6-3.5-11.1-8.3-14.6h72.9c-9.7,9-16.7,20.1-20.8,33.3c-6.2,25-28.5,151.3-28.5,159
		c0.7,8.3,3.5,16,8.3,22.9h-68c1.4-6.2,2.1-12.5,2.1-18.7c0-11.8-10.4-66.6-10.4-66.6s-13.9,56.9-13.9,67.3c0,6.2,1.4,12.5,4.2,18
		h-68.7c0,0,13.2-9.7,13.2-18.7c-1.4-25.7-37.5-159.7-40.3-170.1C150.1,173.9,143.9,164.2,134.9,157.9z"></path>
      </g>
        </svg>
         <p class="leading-tight">${e.gameName}</p> 
     </div> 
     <div class="px-6 ">
      <h2 class="text-[18px] text-[#DCDCDD]">${e.gameTittle}</h2>
        <p class="text-[#ffb400] text-[14px] mt-2">${e.desc}.</p>
        <p class="mt-1 text-[12px] text-[#C2C2C4]">${e.anything}</p>
     </div> 
     <div class="px-6 text-[#DCDCDD] absolute bottom-4 left-0 font-bold">${e.price}</div>   
    </div>`);document.querySelector("#TrendGame-container").insertAdjacentHTML("afterbegin",c.join(""))},P=async()=>{let c=(await(await fetch("http://localhost:3000/GiftGames")).json()).map(e=>`    <div class="flex flex-col gap-2 relative">
        <img class="w-full h-[156px] object-cover" src="${e.image}" alt="">
        <div class=" h-6 mt-2 flex items-center gap-2 px-6 text-[#C2C2C4] text-[14px]">
          <svg class="w-5 h-5" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" part="icon" aria-hidden="true">
        <style type="text/css">
	        .st0{fill:#2B374C;}
	        .st1{fill:#F4BF2A;}
        </style>
        <g>
	      <circle class="st0" cx="255.7" cy="256.5" r="168"></circle>
	      <path class="st1" d="M466,256.5c0-42.3-13.2-84-36.8-119.4V85.7c0-1.4-1.4-2.8-2.8-2.8h-51.4c-71.5-49.3-165.9-49.3-237.4,0H86.3
		c-0.7,0-1.4,0-2.1,0.7c-0.7,0.7-0.7,1.4-0.7,2.1v50.7c-50,72.2-50,167.3,0,239.5v50.7c0,1.4,1.4,2.8,2.8,2.8h51.4
		c72.2,49.3,166.6,48.6,238.8-0.7h50.7c1.4,0,2.8-1.4,2.8-3.5l0,0v-50.7C453.5,340.5,466,298.9,466,256.5z M73.8,256.5
		c0-100.7,81.2-181.9,181.9-181.9s181.9,81.2,181.9,181.9s-81.2,181.9-181.9,181.9l0,0l0,0C155,438.4,73.8,357.2,73.8,256.5z"></path>
	      <path class="st1" d="M134.9,157.9h68.7c-1.4,7.6-2.1,15.3-2.1,23.6c2.8,30.5,22.9,115.2,22.9,115.2L257,164.9L290.4,294
		c0,0,20.1-113.9,20.1-121.5c-0.7-5.6-3.5-11.1-8.3-14.6h72.9c-9.7,9-16.7,20.1-20.8,33.3c-6.2,25-28.5,151.3-28.5,159
		c0.7,8.3,3.5,16,8.3,22.9h-68c1.4-6.2,2.1-12.5,2.1-18.7c0-11.8-10.4-66.6-10.4-66.6s-13.9,56.9-13.9,67.3c0,6.2,1.4,12.5,4.2,18
		h-68.7c0,0,13.2-9.7,13.2-18.7c-1.4-25.7-37.5-159.7-40.3-170.1C150.1,173.9,143.9,164.2,134.9,157.9z"></path>
      </g>
        </svg>
         <p class="leading-tight">${e.gameName}</p> 
     </div> 
     <div class="px-6 ">
      <h2 class="text-[18px] text-[#DCDCDD]">${e.gameTittle}</h2>
        <p class="text-[#ffb400] text-[14px] mt-2">${e.desc}.</p>
        <p class="mt-1 text-[12px] text-[#C2C2C4]">${e.anything}</p>
     </div> 
     <div class="px-6 text-[#DCDCDD] absolute bottom-4 left-0 font-bold">${e.price}</div>   
    </div>`);document.querySelector("#MostGift-container").insertAdjacentHTML("afterbegin",c.join(""))};H();N();O();P();
