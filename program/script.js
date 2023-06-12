firstImg = carousel.querySelectorAll("img")[0]
arrowIcons = document.querySelectorAll(".wrapper i");

let firstImgWidth = firstImg.clientWidth + 14;

arrowIcons.array.forEach(icon => {
    icon.addEventListener("click", () => {
        console.log(icon);
    });
});