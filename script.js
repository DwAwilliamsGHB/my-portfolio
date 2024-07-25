document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav a');
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    const themeToggle = document.getElementById('theme-toggle');

    // Smooth scroll with offset
    for (const link of navLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const headerOffset = 80; // Adjust this value to your preferred space
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    }

    // Initialize EmailJS
    (function(){
        emailjs.init("pn9BMS7cihGNWeXTI");
    })();

    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            emailjs.send("service_wn3jri5", "template_pu7xofc", {
                from_name: name,
                from_email: email,
                message: message
            })
            .then(function(response) {
                formMessage.textContent = 'Thank you for your message!';
                formMessage.style.color = 'green';
                contactForm.reset();
            }, function(error) {
                formMessage.textContent = 'Failed to send message. Please try again later.';
                formMessage.style.color = 'red';
            });
        } else {
            formMessage.textContent = 'Please fill out all fields.';
            formMessage.style.color = 'red';
        }
    });

    // Dark mode toggle
    function setTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggle.textContent = 'Light Mode';
        } else {
            document.body.classList.remove('dark-mode');
            themeToggle.textContent = 'Dark Mode';
        }
    }

    themeToggle.addEventListener('click', function() {
        const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
});
