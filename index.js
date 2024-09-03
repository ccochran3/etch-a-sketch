const container = document.querySelector('.container');



const addHoverToSquares = ( squares ) => {
    const colors = ['red', 'green', 'blue', 'purple'];
    
    squares.forEach(square => {

        // Random number between 1 and 4 inclusive
        const randomNum = Math.floor(Math.random() * (5));
        const randomColor = colors[randomNum];
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = randomColor;;
        });
    });
}

const loadDivs = ( numOfDivs ) => {

    // number of divs is equal to the amount of squares per side
    const squaresPerSide = numOfDivs * numOfDivs;
    const itemSize = 800 / numOfDivs;

    for(let i = 0; i < squaresPerSide; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.style.height = `${itemSize}px`;
        div.style.flexBasis = `${itemSize}px`;
        container.appendChild(div);
    }
    const squares = document.querySelectorAll('.square');

    // Add hover effects to squares
    addHoverToSquares(squares);
}

loadDivs(4);



// Change grid
const gridBtn = document.querySelector(".grid-btn");
gridBtn.addEventListener("click", () => {
    const promptValue = prompt("Please enter a number for a new grid size");

    // Remove existing divs
    while ( container.firstChild ) container.removeChild(container.firstChild);
    loadDivs(promptValue);
});
