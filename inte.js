document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Message sent!');
        contactForm.reset();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const scheduleItems = document.querySelectorAll(".schedule-item");

    scheduleItems.forEach(item => {
        item.addEventListener("click", function () {
            const event = this.querySelector(".event").textContent;
            const time = this.getAttribute("data-time");
            alert(`You selected the event "${event}" scheduled at ${time}.`);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const scheduleItems = document.querySelectorAll(".schedule-item");

    scheduleItems.forEach(item => {
        item.addEventListener("click", function () {
            const url = this.getAttribute("data-url");
            if (url) {
                window.location.href = url; // Redirige a la URL correspondiente
            } else {
                alert("No URL assigned for this event.");
            }
        });
    });
});


