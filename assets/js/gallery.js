function displayImage(image) {
    var fullImg = document.getElementById("fullImg");
    fullImg.src = image.src;
    fullImg.parentElement.style.display = "block";
}  