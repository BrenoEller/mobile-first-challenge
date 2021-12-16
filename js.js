const menu = document.getElementById('icons-menu');


document.getElementById('hamburguer').addEventListener('click', () =>{

    menu.classList.add('on');
})

document.getElementById('close').addEventListener('click', () =>{

    menu.classList.remove('on');
})

document.querySelector('.letras-menu').addEventListener('click', () =>{

    menu.classList.remove('on');
})