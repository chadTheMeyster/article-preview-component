const btn = document.querySelectorAll('.js-button');
const defaultState = document.querySelector('.js-default-state');
const shareState = document.querySelector('.js-share-state');
const hoverState = document.querySelector('.js-hover-state');
const shareIconToolTip = document.querySelector('.js-share-icon-tooltip')

if (window.matchMedia('(min-width: 768px)').matches){
    btn.forEach((button) => {
        button.addEventListener('mouseenter', () => {
    hoverState.classList.remove('hidden');
    hoverState.classList.add('flex');
    });

    button.addEventListener('mouseleave', () => {
    hoverState.classList.remove('flex');     
    hoverState.classList.add('hidden');
    });
});
}else{
    btn.forEach((button) => {
    button.addEventListener('click', () => {
        defaultState.classList.toggle('hidden');
        shareState.classList.toggle('hidden');
    });
});
}



