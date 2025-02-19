// Create and append stylesheet
console.time('test');
const style = document.createElement('style');
document.head.appendChild(style);
style.textContent = `
  body {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .reset-button {
    margin-top: 10px;
    width: 150px;
  }

  .grid-container {
    display: flex;
    flex-direction: column;
    width: 90vh;
    height: 90vh;
  }

  .row {
    display: flex;
    width: 100%;
  }

  .pixel {
    transition: background-color 0.2s;
  }

  .pixel-dark {
    background-color: black;
  }
`;

// Create reset button
const resetButton = document.createElement("button");
resetButton.textContent = "reset";
resetButton.className = "reset-button";
document.body.appendChild(resetButton);

function etchMaker(pixels) {
    // Use document fragment for better performance
    const fragment = document.createDocumentFragment();
    const outerContainer = document.createElement("div");
    outerContainer.className = "grid-container";
    
    // Precalculate pixel size
    const pixelSize = `${100/pixels}%`;
    
    // Create rows and pixels
    for (let i = 0; i < pixels; i++) {
        const row = document.createElement("div");
        row.className = "row";
        row.style.height = pixelSize;
        
        for (let u = 0; u < pixels; u++) {
            const pixelDiv = document.createElement("div");
            pixelDiv.className = "pixel";
            pixelDiv.style.width = pixelSize;
            
            // Optimize condition check
            if ((u % 2 === 0) && (i % 2 !== 0)) {
                pixelDiv.classList.add("pixel-dark");
            }
            
            row.appendChild(pixelDiv);
        }
        outerContainer.appendChild(row);
    }
    
    fragment.appendChild(outerContainer);
    document.body.appendChild(fragment);
}

// Add debouncing to prevent excessive renders
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Create grid with debouncing
const createGrid = debounce((pixels) => {
    // Remove existing grid if any
    const existingGrid = document.querySelector(".grid-container");
    if (existingGrid) {
        existingGrid.remove();
    }
    etchMaker(pixels);
}, 250);

// Initialize grid
createGrid(1200);
console.timeEnd('test');
// Add reset functionality
resetButton.addEventListener("click", () => createGrid(1200));