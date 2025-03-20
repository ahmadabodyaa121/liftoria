// get current year
(function () {
    var year = new Date().getFullYear();
    document.querySelector("#currentYear").innerHTML = year;
})();

// Scroll to Top Button Functionality
(function() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });
    
    // Smooth scroll to top when button is clicked
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
})();

// إضافة تأثير الانتقال ببطئ للقسم الذي يتم اختياره من القائمة 
(function () {
    var sections = document.querySelectorAll("section");
    var navLinks = document.querySelectorAll(".nav-link");
    sections.forEach(function (section) {
        section.addEventListener("click", function () {
            navLinks.forEach(function (navLink) {
                navLink.classList.remove("active");
            });
            navLink.classList.add("active");
        });
    });
})();   

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section id from the href
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Get the header height for offset
                const headerHeight = document.querySelector('.header_section').offsetHeight;
                
                // Calculate the target position with offset
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                // Smooth scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
            }
        });
    });
});

// WhatsApp Message Sending Function
function sendWhatsAppMessage(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Format the message
    const formattedMessage = `*رسالة جديدة من موقع LIFTORIA*\n\n` +
        `*الاسم:* ${name}\n` +
        `*البريد الإلكتروني:* ${email}\n` +
        `*رقم الهاتف:* ${phone}\n\n` +
        `*الرسالة:*\n${message}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(formattedMessage);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/352681588623?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset the form
    document.getElementById('whatsappForm').reset();
}

// Sticky Navbar
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header_section');
    const windowWidth = window.innerWidth;
    
    // Only apply sticky behavior on desktop screens (width > 991px)
    if (windowWidth > 991) {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }
});

 