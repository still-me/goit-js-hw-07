const inputRef = document.querySelector('input');
const renderButton = document.querySelector('button[data-action="render"]');
const destroyButton = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes')

renderButton.addEventListener('click', addAmount)
destroyButton.addEventListener('click', destroyBoxes)

function addAmount () {
    const amount = inputRef.value
    createBoxes(amount)
}

function createBoxes(amount) {
    let pixels = 30;
 
    for (let i = 0; i < amount; i += 1) {
        const newPixels = pixels + i * 10;
        const newBox = document.createElement('div');
        newBox.style.width = `${newPixels}px`;
        newBox.style.height = `${newPixels}px`;
        newBox.style.border = '1px solid black';
        const r = Math.floor(Math.random() * (256));
        const g = Math.floor(Math.random() * (256));
        const b = Math.floor(Math.random() * (256));
        const color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
        newBox.style.backgroundColor = color;
        boxesRef.append(newBox); 
    }
}

function destroyBoxes() {
    boxesRef.innerHTML = '';
    inputRef.value = 0;
}




