// simple script to show form submission on contact page
const form = document.getElementById('contactForm');
const message = document.getElementById('formMessage');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        message.classList.remove('hidden');
        form.reset();
    });
}
