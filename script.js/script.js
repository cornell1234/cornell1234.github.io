document.addEventListener('DOMContentLoaded', function() {

    const openContactButton = document.querySelector('.nav-button');
    const contactForm = document.getElementById('contactForm');


   openContactButton.addEventListener('click', function(event) {
        event.preventDefault();

        contactForm.style.display = (contactFormSection.style.display == 'block') ? 'none' : 'block';
        
        document.getElementById('contactFormSection').scrollIntoView({
            behavior: 'smooth'
        });
    }); 
});

document.getElementById('scrollParagraph').addEventListener('click', function () {
    document.getElementById('targetParagraph').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('nav li a').addEventListener('click', function(event) {
    event.preventDefault();
});

document.querySelector('#home-link').addEventListener('click', function() {
    window.location.href = 'index.html';
});