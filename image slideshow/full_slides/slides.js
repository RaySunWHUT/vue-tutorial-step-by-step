const slide = document.querySelector('.slide');

// 获取所有图片
const images = document.querySelectorAll('.slide img');

const prevBtn = document.querySelector('#prevBtn');

const nextBtn = document.querySelector('#nextBtn');

// 计数器
let counter = 1;

// 图片宽度
const size = images[0].clientWidth;

slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {

    if (counter >= images.length - 1) {
        return;
    }

    slide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});


prevBtn.addEventListener('click', () => {

    if (counter <= 0) {
        return;
    }

    slide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});


slide.addEventListener('transitionend', () => {

    if (images[counter].id === 'lastClone') {
        slide.style.transition = "none";
        counter = images.length - 2;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (images[counter].id === 'firstClone') {
        slide.style.transition = "none";
        counter = images.length - counter;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

});