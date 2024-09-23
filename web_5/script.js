let container = document.querySelector('.container');
let btnOpen = document.getElementById('open');
let btnClose = document.getElementById('close');
let btnScroll = document.getElementById('scroll');

btnClose.onclick = function(){
    container.classList.add('hide');
    this.classList.add('hide');
    btnOpen.classList.remove('hide');
}

btnOpen.onclick = function(){
    container.classList.remove('hide');
    this.classList.add('hide');
    btnClose.classList.remove('hide');
}

window.onscroll = function(){
    if(scrollY >= 400)
        btnScroll.style.display = 'block';
    else
        btnScroll.style.display = 'none';
}

btnScroll.onclick = function(){
    window.scroll({
        top : 0,
        left : 0,
        behavior : 'smooth'
    })
}