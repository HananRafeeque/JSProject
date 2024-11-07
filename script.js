document.getElementById('loadBeaches').addEventListener('click', () => {
    document.getElementById('beaches').classList.toggle('hidden');
    document.getElementById('temples').classList.add('hidden');
    document.getElementById('country').classList.add('hidden');
});

// FAQ Toggle
document.querySelectorAll('.faq-btn').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.classList.toggle('hidden');
    });
});

// Contact Form Validation
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name === "" || email === "" || message === "") {
        alert("All fields must be filled out!");
        return false;
    }

    // Show confirmation message after form submission
    document.getElementById('contactForm').reset();
    document.getElementById('confirmationMessage').classList.remove('hidden');
    return True; // Prevent form submission for demo purposes
}
