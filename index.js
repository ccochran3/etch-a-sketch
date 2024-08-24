const container = document.querySelector('.container');

// Load 16 Divs onto the page.
(() => {
    for(let i = 0; i < 16; i++) {
        const div = document.createElement('div');
        div.innerText = i;
        div.classList.add('square');
        container.appendChild(div);
    }
})();

// Hover effect for each square
const squares = document.querySelectorAll('.square');
squares.forEach(square => {
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = 'yellow';
    });

    square.addEventListener("mouseleave", () => {
        square.style.backgroundColor = 'white';
    })
})
