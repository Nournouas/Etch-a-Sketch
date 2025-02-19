

const body = document.querySelector("body");
body.style.margin = "0"
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";

const resetButton = document.createElement("button");
resetButton.textContent = "reset";
resetButton.style.marginTop = "10px";
resetButton.style.width = "150px";
body.appendChild(resetButton);


function etchMaker (pixels){
    
    const outerContainer = document.createElement("div");
    outerContainer.style.display = "flex";
    outerContainer.style.flexDirection = "column";
    outerContainer.style.width = "90vh";
    outerContainer.style.height = "90vh";


    for (let i = 0; i<pixels ; i++){
        const horizontalContainer = document.createElement("div");
        horizontalContainer.style.display = "flex";
        horizontalContainer.style.width = "100%";
        horizontalContainer.style.height = 100/pixels + "%";
        for (let u = 0; u<pixels ; u++){
            const pixelDiv = document.createElement("div");
            pixelDiv.style.width = 100/pixels + "%";
            if (u%2 === 0 & i%2 != 0){
                pixelDiv.style.backgroundColor = "black";
            }
            horizontalContainer.appendChild(pixelDiv);
        }
        outerContainer.appendChild(horizontalContainer);
    }

    body.appendChild(outerContainer);
}

etchMaker(1200);
