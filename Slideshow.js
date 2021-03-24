//manual
var slideIndex = 0;

//When window loads, shows first image
window.onload = function onLoadClick() {
    document.getElementById("dot1").click();
};

//----
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
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


////////////////AUTO SLIDES (SIMPLE)///////////////////

function clickNextSlides() {
    plusSlides(+1);
}

const auto = setInterval(clickNextSlides, 5000);






    // var slides = document.getElementsByClassName("mySlides")

    // slideIndex++;
    // if (n > slides.length) { slideIndex = 1 }
    // slides[slideIndex - 1].style.display = "block";
    // setInterval(showSlides, 5000); // Change image every 5 seconds





// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");

//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }

//     slideIndex++;
//     if (n > slides.length) { slideIndex = 1 }
//     slides[slideIndex - 1].style.display = "block";
//     setTimeout(showSlides, 5000); // Change image every 5 seconds
// }


