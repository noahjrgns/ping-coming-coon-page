function validEmail() {
    const emailValue = document.querySelector("#email-input").value
    const infoAlert = document.querySelector("#result")
    const emailBorder = document.querySelector("#email-input")
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (validRegex.test(emailValue)) {
        console.log("valid email")
        infoAlert.textContent = ""
        emailBorder.style.borderColor = "hsl(223, 87%, 63%)"

    } else if (emailValue == false) {
        infoAlert.textContent = ""
        emailBorder.style.borderColor = "hsl(223, 87%, 63%)"
    } else {
        console.log("x") 
        infoAlert.textContent = "Please provide a valid email address"
        emailBorder.style.borderColor = "hsl(354, 100%, 66%)"
    }
}

document.querySelector(".btn").addEventListener("click", validEmail)