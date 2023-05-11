document.querySelectorAll('.box[data-error] .FirstName').forEach(inpEl => {
    inpEl.addEventListener('input', () => inpEl.parentElement.removeAttribute('data-error'))
})

const button = document.querySelector('.btn').addEventListener('click', validateForm)


function validateForm(){
    const FirstName = document.querySelector('.FirstName');

    if (FirstName == "" || box.value === box.placeholder){
        FirstName.classList.add('.box[data-error] .FirstName');
        FirstName.classList.add('.input-2').style
    }
}
