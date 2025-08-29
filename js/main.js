
const slides = document.querySelectorAll('.slide')
const paginations = document.querySelectorAll('.pagination')
let counter = 0;
const updatePagination = () => {
    paginations.forEach((f,l) => {
    if (l ===  counter) {
        f.style.backgroundColor = '#0074e0'
    }else{
        f.style.backgroundColor = '#85868A'
    }
})
}
const generateSlider = (c) => {
    slides.forEach ((e,i) => {
    e.style.left = `${(i - c) * 100}%`
});
updatePagination()
};
generateSlider(counter);



const nextBtn = document.querySelector('.slider-btn-next')
const prevBtn = document.querySelector('.slider-btn-prev')
const next = () => {
    if (counter === slides.length - 1) {
        counter = 0
        generateSlider(counter)
    }else{
    counter++;
    generateSlider(counter);
    }
}
const prev = () => {
    if (counter === 0) {
        counter = slides.length - 1
        generateSlider(counter)
    }else{
    counter--;
    generateSlider(counter);
    }
}
nextBtn.addEventListener('click', () => {
    next();
});
prevBtn.addEventListener('click', () => {
    prev()
});

setInterval (() => {
    next()
},
4000)

//mobile slide

const mobileslides = document.querySelectorAll('.mobile-slide');
const mobilepaginations = document.querySelectorAll('.mobile-pagination');
const mobilenextBtn = document.querySelector('.mobile-slider-btn-next');
const mobileprevBtn = document.querySelector('.mobile-slider-btn-prev');
let mobilecounter = 0;
const mobileupdatePagination = () => {
  mobilepaginations.forEach((dot, i) => {
    dot.style.backgroundColor = (i === mobilecounter) ? '#0074e0' : '#85868A';
  });
};
const mobilegenerateSlider = (c) => {
  mobileslides.forEach((slide, i) => {
    slide.style.left = `${(i - c) * 100}%`;
  });
  mobileupdatePagination();
};
mobilegenerateSlider(mobilecounter);
const mobilenext = () => {
  if (mobilecounter === mobileslides.length - 1) {
    mobilecounter = 0;
  } else {
    mobilecounter++;
  }
  mobilegenerateSlider(mobilecounter);
};
const mobileprev = () => {
  if (mobilecounter === 0) {
    mobilecounter = mobileslides.length - 1;
  } else {
    mobilecounter--;
  }
  mobilegenerateSlider(mobilecounter);
};
if (mobilenextBtn) mobilenextBtn.addEventListener('click', mobilenext);
if (mobileprevBtn) mobileprevBtn.addEventListener('click', mobileprev);
mobilepaginations.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    mobilecounter = i;
    mobilegenerateSlider(mobilecounter);
  });
});
setInterval(mobilenext, 4000);



const AccountMenuBtn = document.querySelector('.account-menu-btn')
const menu = document.querySelector('.main-menu');
const GameMenuBtn = document.querySelector('.game-menu-btn')
const GameMenu = document.querySelector('.game-menu')
const CloseGameMenuBtn = document.querySelector('.close-game-menu-btn')
const secondgamemenu = document.querySelector('.second-game-menu')
const balancemenu = document.querySelector('.balance-menu')
const SearcchShop = document.querySelector('.search-shop')
const closeinput = document.querySelector('.close-input')
const inputfocus = document.querySelector('#input-focus')
const buttons = document.querySelectorAll('.mobile-menu-btn');
const pausebtn = document.querySelector('.pause-btn')
const resmuebtn = document.querySelector('.resume-btn')
const ScrollTop = document.querySelector('#ScrollTop')
const CloseMenuBtn = document.querySelector('.close-menu-btn')

let OpenSubmenu = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const submenuId = button.getAttribute('data-submenu');
    const submenu = document.querySelector(`.${submenuId}`);

    if (OpenSubmenu && OpenSubmenu !== submenu) {
      OpenSubmenu.classList.add('hidden');
    }

    if (submenu.classList.contains('hidden')) {
      submenu.classList.remove('hidden');
      OpenSubmenu = submenu;
    } else {
      submenu.classList.add('hidden');
    }
  });
});

GameMenuBtn.addEventListener('click', () => {
  menu.classList.add('hidden');
  GameMenu.classList.toggle('hidden');
  secondgamemenu.classList.remove('hidden');
  SearcchShop.classList.add('hidden');
});

CloseGameMenuBtn.addEventListener('click', () => {
  const allbtnsgamemenu = document.querySelectorAll('[data-submenu]');
  allbtnsgamemenu.forEach(btn => {
    const id = btn.getAttribute('data-submenu');
    const submenu = document.querySelector(`.${id}`);
    if (submenu) submenu.classList.add('hidden');
  });

  GameMenu.classList.add('hidden');
  secondgamemenu.classList.add('hidden');
  SearcchShop.classList.remove('hidden');
});

AccountMenuBtn.addEventListener('click', () => {
  const allbtnsgamemenu = document.querySelectorAll('[data-submenu]');
  allbtnsgamemenu.forEach(btn => {
    const id = btn.getAttribute('data-submenu');
    const submenu = document.querySelector(`.${id}`);
    if (submenu) submenu.classList.add('hidden');
  });

  menu.classList.toggle('hidden');
  GameMenu.classList.add('hidden');
  secondgamemenu.classList.add('hidden');
});

secondgamemenu.addEventListener('click', () => {
  balancemenu.classList.toggle('hidden');
});

inputfocus.addEventListener('focus', () => {
  closeinput.classList.remove('hidden');

  closeinput.addEventListener('click', () => {
    closeinput.classList.add('hidden');
  });
});

CloseMenuBtn.addEventListener('click', ()=> {
    menu.classList.toggle('hidden')
})
let gamesGetter = async ()=> {
    let req = await fetch("http://localhost:3000/games")
    let res = await req.json();
    let data = res.map((elem)=>{
        return `    <div class="flex flex-col gap-2 relative">
        <img class="w-full h-[156px] object-cover" src="${elem.image}" alt="">
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
         <p>${elem.gameName}</p> 
     </div> 
     <div class="px-6 ">
      <h2 class="text-[18px] text-[#DCDCDD]">${elem.gameTittle}</h2>
        <p class="text-[#ffb400] text-[14px] mt-2">${elem.desc}.</p>
     </div> 
     <div class="px-6 text-[#DCDCDD] absolute bottom-6 left-0 font-bold">${elem.price}</div>   
    </div>`;
    });
    document.querySelector('#game-container').insertAdjacentHTML("afterbegin", data.join(''))
};

let FeaturedGetter = async ()=> {
    let req = await
    fetch("http://localhost:3000/FeaturedGames")
    let res = await req.json();
    let data = res.map((elem)=>{
        return `    <div class="flex flex-col gap-2 relative">
        <img class="w-full h-[156px] object-cover" src="${elem.image}" alt="">
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
         <p class="leading-tight">${elem.gameName}</p> 
     </div> 
     <div class="px-6 ">
      <h2 class="text-[18px] text-[#DCDCDD]">${elem.gameTittle}</h2>
        <p class="text-[#ffb400] text-[14px] mt-2">${elem.desc}.</p>
        <p class="mt-1 text-[12px] text-[#C2C2C4]">${elem.anything}</p>
     </div> 
     <div class="px-6 text-[#DCDCDD] absolute bottom-4 left-0 font-bold">${elem.price}</div>   
    </div>`;
    });
    document.querySelector('#Featured-Game-container').insertAdjacentHTML("afterbegin", data.join(''))
};
let TrendGames = async ()=> {
    let req = await
    fetch("http://localhost:3000/TrendGames")
    let res = await req.json();
        let data = res.map((elem)=>{
        return `    <div class="flex flex-col gap-2 relative">
        <img class="w-full h-[156px] object-cover" src="${elem.image}" alt="">
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
         <p class="leading-tight">${elem.gameName}</p> 
     </div> 
     <div class="px-6 ">
      <h2 class="text-[18px] text-[#DCDCDD]">${elem.gameTittle}</h2>
        <p class="text-[#ffb400] text-[14px] mt-2">${elem.desc}.</p>
        <p class="mt-1 text-[12px] text-[#C2C2C4]">${elem.anything}</p>
     </div> 
     <div class="px-6 text-[#DCDCDD] absolute bottom-4 left-0 font-bold">${elem.price}</div>   
    </div>`;
    });
    document.querySelector('#TrendGame-container').insertAdjacentHTML("afterbegin", data.join(''))
};
let GiftGames = async ()=> {
    let req = await
    fetch("http://localhost:3000/GiftGames")
    let res = await req.json();
        let data = res.map((elem)=>{
        return `    <div class="flex flex-col gap-2 relative">
        <img class="w-full h-[156px] object-cover" src="${elem.image}" alt="">
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
         <p class="leading-tight">${elem.gameName}</p> 
     </div> 
     <div class="px-6 ">
      <h2 class="text-[18px] text-[#DCDCDD]">${elem.gameTittle}</h2>
        <p class="text-[#ffb400] text-[14px] mt-2">${elem.desc}.</p>
        <p class="mt-1 text-[12px] text-[#C2C2C4]">${elem.anything}</p>
     </div> 
     <div class="px-6 text-[#DCDCDD] absolute bottom-4 left-0 font-bold">${elem.price}</div>   
    </div>`;
    });
    document.querySelector('#MostGift-container').insertAdjacentHTML("afterbegin", data.join(''))
};
gamesGetter();
FeaturedGetter();
TrendGames();
GiftGames();
