const inputRef = document.querySelector('#validation-input');

const onInputCheckQuantityOfSymbols = (event) => {

    const symbolLength = event.target.value.length;
    const requiredSymbolLength = Number(event.target.dataset.length);

    if (symbolLength === requiredSymbolLength) {
        inputRef.classList.add('valid')
        inputRef.classList.remove('invalid')
    }

    if (symbolLength !== requiredSymbolLength) {
        inputRef.classList.add('invalid')
        inputRef.classList.remove('valid')
    }

    if (symbolLength === 0) {
        inputRef.classList.remove('invalid')
        inputRef.classList.remove('valid')
    }    
}



inputRef.addEventListener('blur', onInputCheckQuantityOfSymbols)
