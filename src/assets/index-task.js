$('.dropdown-title-image').on('click', function(e) {
    var parentDiv = e.target.parentElement.parentElement.parentElement;
    var divToShow = parentDiv.getElementsByClassName('title-dropdown-content')[0];
    if (divToShow.style.display == "block") {
        divToShow.style.display = "none";
    } else {
        divToShow.style.display = "block"
    }
})