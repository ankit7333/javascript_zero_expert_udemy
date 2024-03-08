'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtnModal = document.querySelector('.close-modal');
const openBtnsModal = document.querySelectorAll('.show-modal');
//open modal function
const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
for(let i = 0;i < openBtnsModal.length;i++){
    openBtnsModal[i].addEventListener('click', openModal);
}
//close modal function
const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
closeBtnModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
//keyboard events
document.addEventListener('keydown', function(e){
    console.log(e.key);
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
});
