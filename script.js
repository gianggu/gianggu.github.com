const formHeading = document.querySelector(".contact-heading");
const formInput = document.querySelectorAll(".contact-form-input");

formInputs.forEach((input) => {
    input.addEventListener("focus",() => { 
        formHeading.style.opacity = "0";
        setTimeout(() => {
            formHeading.textContent = `Your ${input.placeholder}`;
            formHeading.style.opactiy = "1";
        }, 300);
    });
});