const body = document.querySelector("body");
body.style.margin = "0";
body.style.padding = "0";
body.style.borderWidth = "0";
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


function etchMaker(pixels){
    
    const outerContainer = document.createElement("div");
    outerContainer.style.display = "flex";
    outerContainer.style.flexDirection = "column";
    outerContainer.style.width = "90vh";
    outerContainer.style.height = "90vh";
    outerContainer.classList.add("containerDiv")


    for (let i = 0; i<pixels ; i++){
        const horizontalContainer = document.createElement("div");
        horizontalContainer.style.display = "flex";
        horizontalContainer.style.width = "100%";
        horizontalContainer.style.height = 100/pixels + "%";
        for (let u = 0; u<pixels ; u++){
            const pixelDiv = document.createElement("div");
            pixelDiv.style.width = 100/pixels + "%";
            pixelDiv.style.backgroundColor = "black";
            pixelDiv.addEventListener("mouseenter", e => e.target.style.backgroundColor = "white");
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
