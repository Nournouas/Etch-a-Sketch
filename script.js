const body = document.querySelector("body");
body.style.margin = "0";
body.style.padding = "0";
body.style.borderWidth = "0";
body.style.backgroundColor = "lightgray";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";


function resetEtch(){
    const newPixels = prompt("How many pixels would you like your new Etch Board to be? (between 1 and 100");
    if (newPixels === null ){return}

    const divToRemove = document.querySelector(".containerDiv");
    if (divToRemove != null) {
        body.removeChild(divToRemove);
    }
    

    if (isNaN(newPixels) || newPixels > 100 || newPixels <= 0){
        alert("Must be a number between 1 and 700");
        resetEtch();
        return
    }else{

        etchMaker(newPixels);
    }
}

function randomRGBInt () {
    return Math.floor(Math.random()*(255 + 1));
}

function randomRGB(){
    let r = randomRGBInt();
    let g = randomRGBInt();
    let b = randomRGBInt();
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function etchMaker(pixels){
    
    const outerContainer = document.createElement("div");
    outerContainer.classList.add("containerDiv")


    for (let i = 0; i<pixels ; i++){
        const horizontalContainer = document.createElement("div");
        horizontalContainer.classList.add("horizontalDiv");
        horizontalContainer.style.height = 100/pixels + "%";
        for (let u = 0; u<pixels ; u++){
            const pixelDiv = document.createElement("div");
            pixelDiv.style.width = 100/pixels + "%";
            pixelDiv.classList.add("pixelDiv");
            pixelDiv.style.opacity = "0.1"
            pixelDiv.addEventListener("mouseenter", e => {
                //e.target.style.backgroundColor = randomRGB();
                e.target.style.backgroundColor = "black";
                e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.1;
            });
            horizontalContainer.appendChild(pixelDiv);
        }
        outerContainer.appendChild(horizontalContainer);
    }

    body.appendChild(outerContainer);
}

const resetButton = document.createElement("button");
resetButton.textContent = "reset";
resetButton.style.marginTop = "10px";
resetButton.addEventListener("click", resetEtch);
resetButton.style.width = "150px";
body.appendChild(resetButton);

etchMaker(100);
