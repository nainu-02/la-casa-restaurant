// Mobile Menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


// Dark Mode

const darkMode = document.getElementById("darkMode");

darkMode.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        darkMode.innerText = "☀️";
    } else {
        darkMode.innerText = "🌙";
    }

});


// Order Button

function orderNow() {

    alert(
        "Welcome to La Casa! 🍽️\n\n" +
        "Please call us at +92 300 1234567 to place your order."
    );

}


// Food Order

function orderFood(foodName) {

    alert(
        "Great choice! 🍽️\n\n" +
        foodName +
        " has been selected.\n\n" +
        "Call +92 300 1234567 to confirm your order."
    );

}


// Contact Form

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Thank you! Your message has been sent successfully. ✅");

    contactForm.reset();

});