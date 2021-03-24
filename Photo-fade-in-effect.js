const row1 = document.getElementsByClassName("row1");


// .addEventListener("scroll", appearWhenScroll)


function appearWhenScroll(x) {

    if (window.scrollBy() === true) {
        x.style.display = "block"
    } else {
        x.style.display = "none"
    }

}

appearWhenScroll(row1);