const menu = document.getElementById('icons-menu');


document.getElementById('hamburguer').addEventListener('click', () =>{

    menu.classList.add('on');
})

document.getElementById('close').addEventListener('click', () =>{

    menu.classList.remove('on');
})

document.getElementById('letras-menu').addEventListener('click', () =>{

    menu.classList.remove('on');
})

document.getElementById('letras-menu2').addEventListener('click', () =>{

    menu.classList.remove('on');
})

document.getElementById('letras-menu3').addEventListener('click', () =>{

    menu.classList.remove('on');
})

document.getElementById('letras-menu4').addEventListener('click', () =>{

    menu.classList.remove('on');
})

document.getElementById('letras-menu5').addEventListener('click', () =>{

    menu.classList.remove('on');
})

const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    loop: false,
  
    pagination: {
      el: '.swiper-pagination',
    },

    mousewheel:true,
    keyboad:true,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },

  
  });