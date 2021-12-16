const menu = document.getElementById('icons-menu')


document.getElementById('hambuguer').addEventListener('click', () =>{

    menu.classList.add('on')
})

document.getElementById('close').addEventListener('click', () =>{

    menu.classlist.remove('on')
})