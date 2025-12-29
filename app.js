const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg"];
const targetImage = document.querySelector(".profile img");
let i = 1;

targetImage.addEventListener("click", () => {

    if(i === images.length - 1){
        i = 0;
    }
    targetImage.src = "images/" + images[i];
    i++;

});