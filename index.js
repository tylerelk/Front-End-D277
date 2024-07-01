const emailInput = document.getElementById("email");
const emailConfirm = document.getElementById("emailConfirm");
const submitButton = document.getElementById("submit");

//Confirm emails match; format check handled by html
emailConfirm.addEventListener("focusout", () => {
    if (emailInput.value != emailConfirm.value) {
        emailConfirm.style.border = "3px solid red";
    } else {
        emailConfirm.style.border = "none";
    }
})

//Prevent form submission
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
})