// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        // Animate hamburger
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : 'none';
        spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
        spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translate(7px, -6px)' : 'none';
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu li a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Select Plan Function
function selectPlan(planType) {
    const membershipTypeSelect = document.getElementById('membershipType');
    const membershipForm = document.getElementById('membershipForm');
    const tshirtSizeGroup = document.getElementById('tshirtSizeGroup');
    const tshirtSizeSelect = document.getElementById('tshirtSize');

    if (planType === 'free') {
        membershipTypeSelect.value = 'free';
        tshirtSizeGroup.style.display = 'none';
        tshirtSizeSelect.removeAttribute('required');
    } else if (planType === 'premium') {
        membershipTypeSelect.value = 'premium';
        tshirtSizeGroup.style.display = 'block';
        tshirtSizeSelect.setAttribute('required', 'required');
    }

    // Smooth scroll to form
    membershipForm.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Highlight form briefly
    membershipForm.style.transition = 'box-shadow 0.3s ease';
    membershipForm.style.boxShadow = '0 0 30px rgba(124, 194, 78, 0.5)';
    setTimeout(() => {
        membershipForm.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.1)';
    }, 1500);
}

// Handle Membership Type Change
const membershipTypeSelect = document.getElementById('membershipType');
const tshirtSizeGroup = document.getElementById('tshirtSizeGroup');
const tshirtSizeSelect = document.getElementById('tshirtSize');

if (membershipTypeSelect) {
    membershipTypeSelect.addEventListener('change', function() {
        if (this.value === 'premium') {
            tshirtSizeGroup.style.display = 'block';
            tshirtSizeSelect.setAttribute('required', 'required');
        } else {
            tshirtSizeGroup.style.display = 'none';
            tshirtSizeSelect.removeAttribute('required');
            tshirtSizeSelect.value = '';
        }
    });
}

// Handle Registration Form Submit
function handleSubmit(event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Log data (In production, send to backend)
    console.log('Registration Data:', data);

    // Show success message
    showSuccessMessage('Registration submitted successfully! We will contact you soon.');

    // Reset form
    event.target.reset();
    tshirtSizeGroup.style.display = 'none';

    // In production, send data to backend
    // Example:
    /*
    fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        showSuccessMessage('Registration submitted successfully!');
        event.target.reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your registration. Please try again.');
    });
    */
}

// Handle Contact Form Submit
function handleContactSubmit(event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Log data (In production, send to backend)
    console.log('Contact Form Data:', data);

    // Show success message
    alert('Message sent successfully! We will get back to you soon.');

    // Reset form
    event.target.reset();

    // In production, send data to backend
    /*
    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert('Message sent successfully!');
        event.target.reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again.');
    });
    */
}

// Show Success Message
function showSuccessMessage(message) {
    // Check if success message element exists, if not create it
    let successMessage = document.querySelector('.success-message');

    if (!successMessage) {
        successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        const form = document.getElementById('registrationForm');
        form.parentNode.insertBefore(successMessage, form.nextSibling);
    }

    successMessage.textContent = message;
    successMessage.classList.add('show');

    // Hide after 5 seconds
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 5000);
}

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.about-card, .gallery-item, .plan-card, .activity-section');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Form validation for phone number
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        this.value = this.value.replace(/[^0-9]/g, '').slice(0, 10);
    });
}

// Form validation for pincode
const pincodeInput = document.getElementById('pincode');
if (pincodeInput) {
    pincodeInput.addEventListener('input', function(e) {
        this.value = this.value.replace(/[^0-9]/g, '').slice(0, 6);
    });
}

// Prevent future dates in DOB
const dobInput = document.getElementById('dob');
if (dobInput) {
    const today = new Date().toISOString().split('T')[0];
    dobInput.setAttribute('max', today);
}

// PAN number validation and formatting
const donorPanInput = document.getElementById('donorPan');
if (donorPanInput) {
    donorPanInput.addEventListener('input', function(e) {
        // Convert to uppercase and remove invalid characters
        this.value = this.value.toUpperCase().replace(/[^A-Z0-9]/g, '');

        // Limit to 10 characters
        if (this.value.length > 10) {
            this.value = this.value.slice(0, 10);
        }
    });

    donorPanInput.addEventListener('blur', function(e) {
        const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        if (this.value && !panPattern.test(this.value)) {
            this.setCustomValidity('Please enter a valid PAN (e.g., ABCDE1234F)');
        } else {
            this.setCustomValidity('');
        }
    });
}

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-in-out'
    });
});

// Counter Animation
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };

    updateCounter();
}

// Intersection Observer for Counter Animation
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            animateCounter(entry.target);
            entry.target.classList.add('animated');
        }
    });
}, { threshold: 0.5 });

// Observe all counters
document.querySelectorAll('.counter').forEach(counter => {
    counterObserver.observe(counter);
});

// Enhanced Smooth Scroll with Easing
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;

            // Smooth scroll with easing
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    const floatingElements = document.querySelector('.floating-elements');

    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / 500);
    }

    if (floatingElements) {
        floatingElements.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Add Hover Effect to Gallery Items
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
});

// Form Input Focus Effect
document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'translateY(-2px)';
        this.parentElement.style.transition = 'transform 0.3s ease';
    });

    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'translateY(0)';
    });
});

// Add Loading State to Submit Buttons
document.querySelectorAll('.submit-button, .plan-button').forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.classList.contains('submit-button') && this.form && !this.form.checkValidity()) {
            return;
        }

        // Add ripple effect
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(20);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// FAQ Toggle Function
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');

    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });

    // Open clicked item if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Donation Amount Selection
function selectAmount(amount) {
    // Remove selected class from all buttons
    document.querySelectorAll('.amount-btn').forEach(btn => {
        btn.classList.remove('selected');
    });

    // Add selected class to clicked button
    event.target.classList.add('selected');

    // Set the amount in the input field
    const amountField = document.getElementById('donationAmount');
    if (amount > 0) {
        amountField.value = amount;
    } else {
        // For custom amount, clear the field and focus on it
        amountField.value = '';
        amountField.focus();
    }
}

// Handle Donation Form Submit
function handleDonation(event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Log data (In production, integrate with payment gateway)
    console.log('Donation Data:', data);

    // Show success message with clear instructions
    const amount = parseInt(data.donationAmount);
    let trees = '';
    if (amount >= 200) {
        const treeCount = Math.floor(amount / 200);
        trees = `\n\n🌳 Your donation will plant approximately ${treeCount} tree${treeCount > 1 ? 's' : ''}!`;
    }

    alert(`Thank you for your interest in donating ₹${data.donationAmount}!${trees}\n\nNext Steps:\n1. Transfer the amount to our bank account (details below)\n2. Send transaction proof to:\n   📧 vipinvrikshyafoundation@gmail.com\n   📱 WhatsApp: +91 9990933203\n3. We'll send you the receipt within 24 hours\n\nThank you for supporting our green mission! 🌳`);

    // Reset form
    event.target.reset();
    document.querySelectorAll('.amount-btn').forEach(btn => {
        btn.classList.remove('selected');
    });

    // In production, integrate with payment gateway like Razorpay
    /*
    // Example Razorpay Integration
    const options = {
        key: 'YOUR_RAZORPAY_KEY',
        amount: data.donationAmount * 100, // Amount in paise
        currency: 'INR',
        name: 'Vipin Vrikshya Foundation',
        description: 'Donation for Green Mission',
        handler: function(response) {
            // Handle successful payment
            console.log('Payment successful:', response);
            // Send data to backend
        },
        prefill: {
            name: data.donorName,
            email: data.donorEmail,
            contact: data.donorPhone
        },
        theme: {
            color: '#5a9a32'
        }
    };

    const razorpay = new Razorpay(options);
    razorpay.open();
    */
}

// Smooth reveal for founder image on scroll
const founderImage = document.querySelector('.founder-image img');
if (founderImage) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
            }
        });
    }, { threshold: 0.3 });

    founderImage.style.opacity = '0';
    founderImage.style.transform = 'scale(0.9)';
    founderImage.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    imageObserver.observe(founderImage);
}

// Image Modal Functions
function openImageModal(element) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');

    const img = element.querySelector('img');

    modal.classList.add('show');
    modalImg.src = img.src;
    modalCaption.textContent = img.alt;

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('show');

    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Close modal on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeImageModal();
    }
});

// Prevent modal from closing when clicking on the image
document.getElementById('modalImage')?.addEventListener('click', function(event) {
    event.stopPropagation();
});

// Newspaper Slider Functionality
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.newspaper-slide');
    const dots = document.querySelectorAll('.slider-dots .dot');

    if (!slides.length) return;

    // Wrap around
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;

    // Remove active class from all
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Add active class to current
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function changeSlide(direction) {
    currentSlide += direction;
    showSlide(currentSlide);
    resetSlideInterval();
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
    resetSlideInterval();
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function startSlideShow() {
    slideInterval = setInterval(nextSlide, 2000); // Change every 2 seconds
}

function resetSlideInterval() {
    clearInterval(slideInterval);
    startSlideShow();
}

// Start slideshow when page loads
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.newspaper-slider')) {
        showSlide(currentSlide);
        startSlideShow();
    }
});

// Pause slideshow when hovering over slider
document.querySelector('.newspaper-slider')?.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

// Resume slideshow when mouse leaves
document.querySelector('.newspaper-slider')?.addEventListener('mouseleave', () => {
    startSlideShow();
});
