// Konka Productions - Part 3 JavaScript

document.addEventListener('DOMContentLoaded', function () {

    // 1. Hamburger menu toggle
    var navToggle = document.querySelector('.nav-toggle');
    var navMenu = document.querySelector('#main-nav ul');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            var isOpen = navMenu.classList.toggle('active');
            this.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
        navMenu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // 2. Time-based greeting on homepage
    var greetingEl = document.getElementById('greeting');
    if (greetingEl) {
        var hour = new Date().getHours();
        var greeting;
        if (hour < 12) greeting = 'Good morning, and welcome to Konka Productions.';
        else if (hour < 18) greeting = 'Good afternoon, and welcome to Konka Productions.';
        else greeting = 'Good evening, and welcome to Konka Productions.';
        greetingEl.textContent = greeting;
    }

    // 3. Dynamic featured service on services page
    var featuredServiceEl = document.getElementById('featured-service');
    if (featuredServiceEl) {
        var services = [
            { name: 'Sound Systems and Audio', desc: 'Powerful PA systems and crystal clear audio for any size event.' },
            { name: 'Lighting and Visuals', desc: 'LED walls, moving heads, and wash lighting for an unforgettable atmosphere.' },
            { name: 'DJ Equipment and Stages', desc: 'Professional DJ gear and sturdy stage platforms ready for your show.' },
            { name: 'Generators and Power', desc: 'Reliable backup power to keep your event running without interruption.' },
            { name: 'Full Production Package', desc: 'Complete sound, lighting, stage, and power for large scale productions.' }
        ];
        var dayIndex = new Date().getDay() % services.length;
        var featured = services[dayIndex];
        featuredServiceEl.innerHTML = '<h3>Featured This Week: ' + featured.name + '</h3><p>' + featured.desc + '</p>';
    }

    // 4. Search filter on services page
    var searchInput = document.getElementById('service-search');
    if (searchInput) {
        var serviceCards = document.querySelectorAll('.service-card');
        var noResults = document.getElementById('no-results');
        searchInput.addEventListener('input', function () {
            var term = this.value.toLowerCase().trim();
            var visible = 0;
            serviceCards.forEach(function (card) {
                if (term === '' || card.textContent.toLowerCase().indexOf(term) !== -1) {
                    card.style.display = '';
                    visible++;
                } else {
                    card.style.display = 'none';
                }
            });
            if (noResults) noResults.style.display = visible === 0 ? 'block' : 'none';
        });
    }

    // 5. Lightbox for gallery images
    var galleryImages = document.querySelectorAll('.gallery-img');
    if (galleryImages.length > 0) {
        var lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.setAttribute('role', 'dialog');
        lightbox.setAttribute('aria-label', 'Image preview');
        lightbox.innerHTML = '<span class="lightbox-close" aria-label="Close image">&times;</span><img class="lightbox-img" src="" alt="">';
        document.body.appendChild(lightbox);

        var lightboxImg = lightbox.querySelector('.lightbox-img');
        var closeBtn = lightbox.querySelector('.lightbox-close');

        function openLightbox(img) {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.classList.add('active');
        }

        function closeLightbox() {
            lightbox.classList.remove('active');
            lightboxImg.src = '';
        }

        galleryImages.forEach(function (img) {
            img.addEventListener('click', function () { openLightbox(img); });
            img.setAttribute('tabindex', '0');
            img.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(img);
                }
            });
        });

        closeBtn.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', function (e) {
            if (e.target === lightbox) closeLightbox();
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeLightbox();
        });
    }

    // 6. Leaflet interactive map on contact page
    var mapContainer = document.getElementById('interactive-map');
    if (mapContainer && typeof L !== 'undefined') {
        var officeLat = -23.8;
        var officeLng = 29.7;
        var map = L.map('interactive-map').setView([officeLat, officeLng], 10);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors',
            maxZoom: 18
        }).addTo(map);
        L.marker([officeLat, officeLng]).addTo(map)
            .bindPopup('<strong>Konka Productions Head Office</strong><br>Plot 50 Rissik, Limpopo')
            .openPopup();
    }

    // 7. Directions button
    var directionsBtn = document.getElementById('directions-btn');
    if (directionsBtn) {
        directionsBtn.addEventListener('click', function () {
            var url = 'https://www.google.com/maps/dir/?api=1&destination=Plot+50+Rissik,Limpopo,South+Africa';
            window.open(url, '_blank', 'noopener');
        });
    }

    // 8. Scroll animations
    var animatedSections = document.querySelectorAll('.animate-on-scroll');
    if (animatedSections.length > 0 && 'IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        animatedSections.forEach(function (s) { observer.observe(s); });
    } else {
        animatedSections.forEach(function (s) { s.classList.add('visible'); });
    }

    // 9. Enquiry form validation and cost estimate
    var enquiryForm = document.getElementById('enquiry-form');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function (e) {
            e.preventDefault();
            handleEnquirySubmit(enquiryForm);
        });
    }

    function handleEnquirySubmit(form) {
        var fullname = document.getElementById('fullname');
        var email = document.getElementById('email');
        var phone = document.getElementById('phone');
        var category = document.getElementById('category');
        var description = document.getElementById('requirements');
        var responseBox = document.getElementById('form-response');
        var isValid = true;

        form.querySelectorAll('.error-message').forEach(function (el) { el.remove(); });
        form.querySelectorAll('input, select, textarea').forEach(function (el) { el.classList.remove('invalid'); });

        function showError(field, message) {
            field.classList.add('invalid');
            var error = document.createElement('span');
            error.className = 'error-message';
            error.textContent = message;
            field.parentNode.appendChild(error);
            isValid = false;
        }

        if (fullname.value.trim().length < 2) showError(fullname, 'Please enter your full name.');
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) showError(email, 'Please enter a valid email address.');
        var phonePattern = /^[0-9+\s\-()]{10,}$/;
        if (!phonePattern.test(phone.value.trim())) showError(phone, 'Please enter a valid phone number.');
        if (category.value === '') showError(category, 'Please select an equipment category.');
        if (description.value.trim().length < 10) showError(description, 'Please tell us more (at least 10 characters).');

        if (!isValid) {
            responseBox.textContent = 'Please fix the errors above and try again.';
            responseBox.className = 'form-response error';
            return;
        }

        var estimates = {
            'sound': 'R3,500 to R15,000 per day depending on system size',
            'lighting': 'R2,500 to R12,000 per day depending on rig size',
            'stage': 'R4,000 to R20,000 per day depending on platform area',
            'dj': 'R1,500 to R6,000 per day',
            'power': 'R2,000 to R8,000 per day',
            'full-package': 'R15,000 to R60,000 per day for a full setup'
        };
        var estimate = estimates[category.value] || 'Contact us for a custom quote.';
        var categoryText = category.options[category.selectedIndex].text;

        responseBox.innerHTML = '<strong>Thank you, ' + fullname.value.trim() + '.</strong><br>' +
            'Your enquiry for <strong>' + categoryText + '</strong> has been received.<br>' +
            '<strong>Estimated cost:</strong> ' + estimate + '<br>' +
            'We will contact you within 24 hours to confirm availability.';
        responseBox.className = 'form-response success';
        form.reset();
    }

    // 10. Contact form validation and email compilation
    var contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            handleContactSubmit(contactForm);
        });
    }

    function handleContactSubmit(form) {
        var fullname = document.getElementById('contact-name');
        var email = document.getElementById('contact-email');
        var messageType = document.getElementById('contact-type');
        var message = document.getElementById('contact-message');
        var responseBox = document.getElementById('contact-response');
        var isValid = true;

        form.querySelectorAll('.error-message').forEach(function (el) { el.remove(); });
        form.querySelectorAll('input, select, textarea').forEach(function (el) { el.classList.remove('invalid'); });

        function showError(field, msg) {
            field.classList.add('invalid');
            var error = document.createElement('span');
            error.className = 'error-message';
            error.textContent = msg;
            field.parentNode.appendChild(error);
            isValid = false;
        }

        if (fullname.value.trim().length < 2) showError(fullname, 'Please enter your full name.');
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) showError(email, 'Please enter a valid email address.');
        if (message.value.trim().length < 10) showError(message, 'Please write a message (at least 10 characters).');

        if (!isValid) {
            responseBox.textContent = 'Please fix the errors above and try again.';
            responseBox.className = 'form-response error';
            return;
        }

        var subject = encodeURIComponent(messageType.value + ' from ' + fullname.value.trim());
        var body = encodeURIComponent(
            'Name: ' + fullname.value.trim() + '\n' +
            'Email: ' + email.value.trim() + '\n' +
            'Type: ' + messageType.value + '\n\n' +
            'Message:\n' + message.value.trim()
        );

        responseBox.innerHTML = '<strong>Thank you, ' + fullname.value.trim() + '.</strong><br>' +
            'Your message is ready. <a href="mailto:info@konkaproductions.co.za?subject=' + subject + '&body=' + body + '">Click here to open it in your email app and send</a>.';
        responseBox.className = 'form-response success';
    }
});