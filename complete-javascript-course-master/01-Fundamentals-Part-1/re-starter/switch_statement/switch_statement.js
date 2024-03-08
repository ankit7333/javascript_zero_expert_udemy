
let day;
switch(new Date().getDay()){
    case 0:
        day = `Sunday`;
        break;
    case 1:
        day = `Monday`;
        break;
    case 2:
        day = `Tuesday`;
        break;
    case 3:
        day = `Wednesday`;
        break;
    case 4:
        day = `Thursday`;
        break;
    case 5:
        day = `Friday`;
        break;
    case 6:
        day = `Saturday`;
        break;
    default:
        day = `not a week day`;
}
console.log(day);

const starWrap = document.querySelector('.start__wrap');
const clickStar = function(e){
    const bts = document.querySelectorAll('button');
    const clicked = e.target.closest('button');
    const buttonElement = clicked.classList;
    buttonElement.add('orange');
    if(buttonElement.contains('orange')){
        let indexElem = -1
        for(let j=0; j<bts.length; j++){
            if(bts[j]==clicked){
                // console.log(j);
                indexElem=j; break;
            }
        }
        for(let k=0; k<indexElem; k++){
            bts[k].classList.add('orange');
        }
        // return !bts;
    }
}
let html='';
for(let i = 1; i <= 5; i++){
    html += `<button class='star star--${i}'><span>${i}</span></button>`;
    starWrap.addEventListener('click', clickStar);
}
starWrap.insertAdjacentHTML('afterbegin', html);

    

