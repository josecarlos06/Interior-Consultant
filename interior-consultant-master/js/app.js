const navegacion = document.querySelector('.menu');
const ul = document.querySelector('.ul');
const img =document.querySelector('.bx-menu');

navegacion.addEventListener('click', e =>{
    if(ul.classList.contains('add')){
        img.classList.add('bx-menu')
        ul.classList.remove('add');
        img.classList.remove('bx-x');
    }else{
        img.classList.remove('bx-menu')
        img.classList.add('bx-x')
        ul.classList.add('add');
    }
})