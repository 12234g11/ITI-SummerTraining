window.onload = function () {
let scrollStep = 10;
let scrollInterval = setInterval(function () {
    if (window.scrollY + window.innerHeight < document.body.scrollHeight) {
        window.scrollBy(0, scrollStep); 
    }
    else {
    clearInterval(scrollInterval); 
    }
}, 60);
};