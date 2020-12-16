var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slajd");
    var tackice = document.getElementsByClassName("tackica");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < tackice.length; i++) {
        tackice[i].className = tackice[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    tackice[slideIndex - 1].className += " active";
}

// U ovoj funkciji pozvati sve one koje treba da se pozovu kad se refresh-uje stranica
function onLoad() {
    showSlides(slideIndex);
}
