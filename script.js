document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav a');

    for (const link of navLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav a');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project');

    for (const link of navLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    for (const button of filterButtons) {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            filterProjects(filter);
        });
    }

    function filterProjects(filter) {
        for (const project of projects) {
            if (filter === 'all' || project.getAttribute('data-category') === filter) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        }
    }
});

// script.js

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav a');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project');
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    for (const link of navLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    for (const button of filterButtons) {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            filterProjects(filter);
        });
    }

    function filterProjects(filter) {
        for (const project of projects) {
            if (filter === 'all' || project.getAttribute('data-category') === filter) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        }
    }

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            formMessage.textContent = 'Thank you for your message!';
            formMessage.style.color = 'green';
            contactForm.reset();
        } else {
            formMessage.textContent = 'Please fill out all fields.';
            formMessage.style.color = 'red';
        }
    });
});
