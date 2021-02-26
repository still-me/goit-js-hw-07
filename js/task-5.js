const inputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output')

const onInputAddText = (event) => {
    
    nameOutputRef.textContent = event.target.value;
    
    if (event.target.value === '') {
     nameOutputRef.textContent = 'незнакомец'
    }
  
}

inputRef.addEventListener('input', onInputAddText);