const container = document.querySelector('.container');

const addHoverToSquares = ( squares ) => {
    squares.forEach(square => {
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = 'yellow';
        });

        square.addEventListener("mouseleave", () => {
            square.style.backgroundColor = 'white';
        })
    })
}

const loadDivs = ( numOfDivs ) => {
    // number of divs is equal to the amount of squares per side
    const squaresPerSide = numOfDivs * numOfDivs;
    for(let i = 0; i < squaresPerSide; i++) {
        const div = document.createElement('div');
        div.innerText = i;
        div.classList.add('square');
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
