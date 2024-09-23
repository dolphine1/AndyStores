document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const modeToggle = document.getElementById('mode-toggle');
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.getElementById('nav-menu');

    // Form submission handling
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        if (name && email && message) {
            alert(`Thank you for your message, ${name}! We'll get back to you soon.`);
            contactForm.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });

    // Dark mode toggle
    modeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        updateModeToggleText();
        saveUserPreference();
    });

    function updateModeToggleText() {
        modeToggle.textContent = document.body.classList.contains('dark-mode')
            ? 'Switch to Light Mode'
            : 'Switch to Dark Mode';
    }

    // Save user mode preference-dark/light
    function saveUserPreference() {
        const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('colorMode', mode);
    }

    // Loading user's mode preference
    function loadUserPreference() {
        const userPreference = localStorage.getItem('colorMode');
        if (userPreference === 'dark') {
            document.body.classList.add('dark-mode');
        }
        updateModeToggleText();
    }

    // Initialize user preference
    loadUserPreference();

    // Hamburger menu
    menuIcon.addEventListener('click', function() {
        this.classList.toggle('open');
        navMenu.classList.toggle('active');
        navMenu.classList.toggle('hidden');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnIcon = menuIcon.contains(event.target);

        if (!isClickInsideMenu && !isClickOnIcon && navMenu.classList.contains('active')) {
            menuIcon.classList.remove('open');
            navMenu.classList.remove('active');
            navMenu.classList.add('hidden');
        }
    });

    // Close menu when a nav link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            menuIcon.classList.remove('open');
            navMenu.classList.remove('active');
            navMenu.classList.add('hidden');
        });
    });
});
