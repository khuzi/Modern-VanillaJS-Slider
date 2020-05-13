const slider = document.querySelector('.slider');
const buttons = document.querySelectorAll('.btn');
const option = document.querySelectorAll('.option');
const slides = document.querySelectorAll('.img');
const background = document.querySelectorAll('.bg');



let index = 1;
let opIndex = 0;
let size  = slides[index].clientWidth;

function update()  {
    slider.style.transform = `translateX(${-size * index}px)`;
    option.forEach(op => op.classList.remove('coloured'));
    option[opIndex].classList.add('coloured');
    background.forEach(bg => bg.classList.remove('show'));
    background[opIndex].classList.add('show');
};


update();


function slide() {
    slider. style.transition = 'transform .5s ease-in-out';
    update();
}


// function btnCheck() {
//     if (this.id === 'prev') {
//         index--;
//         console.log(this);
//     } else if (this.id === 'next'){
//         index++;
//     }
//     slide();
// };



slider.addEventListener('transitionend',()=>{
    if (slides[index].id==='last') {
        slider.style.transition = 'none';
        index = slides.length-2;
        slider.style.transform = `translateX(${-size * index}px)`;
    }
    else if (slides[index].id==='first') {
        slider.style.transition = 'none';
        index = 1;
        slider.style.transform = `translateX(${-size * index}px)`;
    }
})


buttons.forEach(btn => btn.addEventListener('click',() =>  {
    if (btn.id === 'prev') {
        index--;
        if (opIndex == 0 ) {
            opIndex = 4;
        } else { 
            opIndex--;
        }
        
    } else if (btn.id === 'next'){
        index++;
        if (opIndex == 4 ) {
            opIndex = 0;
        } else { 
            opIndex++;
        }
    }
    slide();
}));

option.forEach(opt => opt.addEventListener('click',() => {
    let i = Number(opt.getAttribute('option-index'));
    console.log(i);
    index = i + 1;
    opIndex = i;
    slide();
})) 


