document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
});

// Reveal sections on scroll
window.addEventListener("scroll", revealSections);

function revealSections() {
    var sections = document.querySelectorAll(".section");

    for (var i = 0; i < sections.length; i++) {
        var windowHeight = window.innerHeight;
        var sectionTop = sections[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (sectionTop < windowHeight - revealPoint) {
            sections[i].classList.add("reveal");
        }
    }
}
