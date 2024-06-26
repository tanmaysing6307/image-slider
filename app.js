
document.addEventListener('DOMContentLoaded', (event) => {
    let nextBtn = document.getElementById('next');
    let prevBtn = document.getElementById('prev');
    let carousel = document.querySelector('.carousel');
    let listItems = document.querySelector('.carousel .list');
    let thumbnails = document.querySelector('.carousel .thumbnail');
    let timeRunning = 3000;
    let timeAutoNext = 7000;
    let runTimeout;
    let runAutoRun = setTimeout(() => {
        nextBtn.click();
    }, timeAutoNext);

    nextBtn.onclick = function() {
        showSlider('next');
    };

    prevBtn.onclick = function() {
        showSlider('prev');
    };

    function showSlider(type) {
        let itemSlider = document.querySelectorAll('.carousel .list .item');
        let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

        if (type === 'next') {
            // Move the first item to the end
            listItems.appendChild(itemSlider[0]);
            thumbnails.appendChild(itemThumbnail[0]);
            carousel.classList.add('next');
        } else {
            // Move the last item to the beginning
            let lastItemIndex = itemSlider.length - 1;
            listItems.prepend(itemSlider[lastItemIndex]);
            thumbnails.prepend(itemThumbnail[lastItemIndex]);
            carousel.classList.add('prev');
        }

        // Remove the animation classes after the specified time
        clearTimeout(runTimeout);
        runTimeout = setTimeout(() => {
            carousel.classList.remove('next');
            carousel.classList.remove('prev');
        }, timeRunning);

        // Restart the auto-run timeout
        clearTimeout(runAutoRun);
        runAutoRun = setTimeout(() => {
            nextBtn.click();
        }, timeAutoNext);
    }
});

