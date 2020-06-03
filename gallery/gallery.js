function Gallery(gallery) {
    if(!gallery) {
        throw new Error('No Gallery Found!');
    }

    // Select the elements we need
    const images = Array.from(gallery.querySelectorAll('img'));
    const modal = document.querySelector('.modal');
    const prevButton = modal.querySelector('.prev');
    const nextButton = modal.querySelector('.next');
    let currentImage;

    function openModal() {
        console.info('Opening modal...');
        // First check if the modal is already open
        if(modal.matches('.open')) {
            console.info('Modal already open');
            return;
        }
        modal.classList.add('open');
    }

    function closeModal() {
        modal.classList.remove('open');
        // TODO: add event listeners for clicks and keyboard
    }

    function showImage(imgEl) {
        if(!imgEl) {
            console.info('no image to show');
            return;
        }

        // update the modal with this info
        console.log(imgEl);
        modal.querySelector('img').src = imgEl.src;
        modal.querySelector('h2').textContent = imgEl.title;
        modal.querySelector('figure p').textContent = imgEl.dataset.description;
        currentImage = imgEl;
        openModal();
    }

    images.forEach(image => image.addEventListener('click', e => showImage(e.currentTarget)));
}



// Use it on the page
const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));




// When a return statement is called in a function, the execution of this function is stopped.
// When variables are created inside a function, those variables are only available inside the function. Unless, we were to explicitely return it and put it on its own variable when that function is run.
// lexical scoping - The way variable/scope lookup happens when a function is run where it wasn't defined.