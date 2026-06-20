// funciones para el menú de navegación
const currentPage = window.location.pathname.split("/").pop();
const menuLinks = document.querySelectorAll("nav a");
menuLinks.forEach(link => {

    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
});

//validation for the contact form
const namevalid = /^[a-zA-Z\s]+$/;
const emailvalid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const messagevalid = /^.{10,200}$/;

// Validate form fields
const namevalue = namevalid.test(name);
const emailvalue = emailvalid.test(email);
const messagevalue = messagevalid.test(message);

// Display error messages
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

//if the name, email, or message is invalid, display an error message
if (!namevalue) {
    nameError.textContent = "Please enter a valid name.";
}
if (!emailvalue) {
    emailError.textContent = "Please enter a valid email address.";
}
if (!messagevalue) {
    messageError.textContent = "Please enter a message between 10 and 200 characters.";
} else {
    messageError.textContent = "name or gmail no is valid, please check them and try again.";
}
if (namevalue === "") {
    nameError.textContent = "Please enter your name.";
}