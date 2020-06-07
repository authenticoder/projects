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

        // event listeners to be bound when we open the modal:
        window.addEventListener('keyup', handleKeyUp);
        nextButton.addEventListener('click', showNextImage);
        prevButton.addEventListener('click', showPrevImage);
    }

    function closeModal() {
        modal.classList.remove('open');
        // TODO: add event listeners for clicks and keyboard
        window.removeEventListener('keyup', handleKeyUp);
        nextButton.removeEventListener('click', showNextImage);
        prevButton.removeEventListener('click', showPrevImage);
    }

    function handleClickOutside(e) {
        if(e.target === e.currentTarget) {  // if the thing you clicked on is the same as the thing you are listening for the click on.
            closeModal(); // close the modal.
        }
    }

    function handleKeyUp(e) {
        if(e.key === 'Escape') return closeModal();
        if(e.key === 'ArrowRight') return showNextImage();
        if(e.key === 'ArrowLeft') return showPrevImage();
    }

    function showNextImage() {
        showImage(currentImage.nextElementSibling || gallery.firstElementChild);
    }

    function showPrevImage() {
        showImage(currentImage.previousElementSibling || gallery.lastElementChild);
    }

    function showImage(imgEl) {
        if(!imgEl) {
            console.info('no image to show');
            return;
        }

        // update the modal with this info
        modal.querySelector('img').src = imgEl.src;
        modal.querySelector('h2').textContent = imgEl.title;
        modal.querySelector('figure p').textContent = imgEl.dataset.description;
        currentImage = imgEl;
        openModal();
    }

    // These are our event listeners!
    images.forEach(image => 
        image.addEventListener('click', e => showImage
        (e.currentTarget))
    );

    // Loop over each image
    images.forEach(image => {
        // attach an event listener for each image
        image.addEventListener('keyup', e => {
            // when that is keyup'd, check if it was enter
            if(e.key === 'Enter') {
                // if it was, show that image
                showImage(e.currentTarget);
            }
        });
    });

    modal.addEventListener('click', handleClickOutside);
    
}



// Use it on the page
const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
const gallery3 = Gallery(document.querySelector('.gallery3'));




// When a return statement is called in a function, the execution of this function is stopped.
// When variables are created inside a function, those variables are only available inside the function. Unless, we were to explicitely return it and put it on its own variable when that function is run.
// lexical scoping - The way variable/scope lookup happens when a function is run where it wasn't defined.