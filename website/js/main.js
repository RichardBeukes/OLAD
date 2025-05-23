// simple script to show form submission on contact page
const form = document.getElementById('contactForm');
const message = document.getElementById('formMessage');

if (form) {
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        try {
            await fetch(form.action, {
                method: 'POST',
                body: formData
            });
            message.classList.remove('hidden');
            form.reset();
        } catch (err) {
            alert('Failed to submit form');
        }
    });
}
