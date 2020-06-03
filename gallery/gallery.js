function Gallery(gallery) {

}


// Use it on the page
const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));

function wrap(n) {
    let local = n;
    function res() {
        return local;
    } 
}

// n = 1 , local = 1, res is returning 1. 

let wrap1 = wrap(1);
wrap1();


// When a return statement is called in a function, the execution of this function is stopped.
// When variables are created inside a function, those variables are only available inside the function. Unless, we were to explicitely return it and put it on its own variable when that function is run.
// lexical scoping - The way variable/scope lookup happens when a function is run where it wasn't defined.