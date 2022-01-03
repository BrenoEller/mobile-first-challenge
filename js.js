const menu = document.getElementById('icons-menu');


document.getElementById('hamburguer').addEventListener('click', () =>{

    menu.classList.add('on');
})

document.getElementById('close').addEventListener('click', () =>{

    menu.classList.remove('on');
})

const links = document.querySelectorAll('ul li a');

for (const link of links){
    link.addEventListener('click', () => {
        menu.classList.remove('on')
    }
    )
}


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
