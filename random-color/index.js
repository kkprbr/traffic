let bgContainerElement = document.getElementById("bgContainer");
let buttonElement = document.getElementById("button");
let bgColorsArray = ["#e75d73", "#53cca2", "#efc87d", "#628df0", "#883e7f", "#184b73"];

bgContainerElement.style.backgroundColor = bgColorsArray[0];


function onChangeBgColor() {
    let numberOfBgColors = bgColorsArray.length;
    let randomBgColorIndex = Math.ceil(Math.random() * numberOfBgColors);

    if(randomBgColorIndex === numberOfBgColors){
        randomBgColorIndex = numberOfBgColors = -1;
    }
    let randomBgColor = bgColorsArray[randomBgColorIndex];

    bgContainerElement.style.backgroundColor = randomBgColor;
}