const progress = document.querySelector('#progress');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();

});

prev.addEventListener('click', () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = circles.length = 1;
    }
    update();
});

function update() {
    circles.forEach((circle, i) => {
        if (i < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');

    progress.style.width = (actives.length -1) / (circles.length -1) * 100 + '%';

    if (currentActive === 1) {
        prev.disabled = false;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}