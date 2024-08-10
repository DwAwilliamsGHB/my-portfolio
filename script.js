document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav a');
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    const themeToggle = document.getElementById('theme-toggle');
    const colorPicker = document.getElementById('color-picker');
    const colorPickerContainer = document.getElementById('color-picker-container');
    const mainElement = document.querySelector('main');

    // Smooth scroll with offset
    for (const link of navLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const headerOffset = 80; // Adjust this value to your preferred space
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + mainElement.scrollTop - headerOffset;

            mainElement.scrollTo({
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
                console.error('EmailJS error:', error); // Log the error for debugging
            });
        } else {
            formMessage.textContent = 'Please fill out all fields.';
            formMessage.style.color = 'red';
        }
    });

    function setTheme(theme) {
        const moonIcon = document.querySelector('#theme-toggle .fa-moon');
        const sunIcon = document.querySelector('#theme-toggle .fa-sun');
    
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'inline';
        } else {
            document.body.classList.remove('dark-mode');
            moonIcon.style.display = 'inline';
            sunIcon.style.display = 'none';
        }
    }
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Color Picker functionality
    colorPicker.addEventListener('input', function() {
        const selectedColor = this.value;
        document.body.style.backgroundColor = selectedColor;

        // Dynamically update the hover color to match the selected background color
        colorPickerContainer.addEventListener('mouseenter', function() {
            colorPickerContainer.style.backgroundColor = selectedColor;
        });

        colorPickerContainer.addEventListener('mouseleave', function() {
            colorPickerContainer.style.backgroundColor = '#00000026';
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('nav ul');

    // Close the menu if clicking outside of it
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);

        if (!isClickInsideMenu && !isClickOnToggle) {
            menuToggle.checked = false; // Uncheck the menu toggle checkbox
        }
    });
});

