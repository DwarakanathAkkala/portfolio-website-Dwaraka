// Menu Show Y-Axis Hidden
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Menu Show
// Validate if navToggle constant element exists
if (navToggle) {
    navToggle.addEventListener('click', () => {
        console.log("Clicked")
        navMenu.classList.add('show-menu');
    });
}

// Menu Hidden
// Validate if navClose constant exists
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Remove Menu Mobile
const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When user clicks on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


// Accordions - Skills Section
const skillsContent = document.getElementsByClassName("skills_content");
const skillsHeader = document.querySelectorAll('.skills_header');

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills_content skills_close';
    }

    if (itemClass === 'skills_content skills_close') {
        this.parentNode.className = 'skills_content skill_open';
    }
}

skillsHeader.forEach((ele) => {
    ele.addEventListener('click', toggleSkills)
});


// Qualification Tabs
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

/* Handles the click event on qualification tabs and updates the active tab and its corresponding content. */
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification_active');
        });
        target.classList.add('qualification_active');

        tabs.forEach(tab => {
            tab.classList.remove('qualification_active');
        });
        tab.classList.add('qualification_active');

    });

});


// Services Modal
const modalViews = document.querySelectorAll('.services_modal');
const modalBtns = document.querySelectorAll('.services_button');
const modalCloses = document.querySelectorAll('.services_modal_close');

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active_modal');
}

/* Adds the class 'active_modal' to the specified modal view, making it visible.
 * @param {number} modalClick - The index of the modal view to be shown. */
modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    });
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove("active_modal");
        })
    });
});



// Portfolio Swiper
let swiperPortfolio = new Swiper('.portfolio_container', {
    cssMode: true,
    // Comment out below line when more prtfolios are added
    // loop: true, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    mousewheel: true,
    keyboard: true
});

// Testimonial Swiper
let swiperTestimonial = new Swiper('.testimonial_container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    breakpoints: {
        568: {
            slidesPerView: 2
        }
    }
});


// Scroll Sections Active Link
const sections = document.querySelectorAll('section[id]');

/* Updates the active link in the navigation menu based on the current scroll position. */
function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active_link');
        }
        else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active_link');
        };
    });
};

window.addEventListener('scroll', scrollActive);

/* Changes the background header of a webpage based on the scroll position. */
function scrollHeader() {
    const nav = document.getElementById('header');
    // When the scroll is greater than or equal to 80 viewport height, add the scroll-header class.
    if (this.scrollY >= 80) {
        nav.classList.add('scroll_header');
    } else {
        nav.classList.remove('scroll_header');
    }
}
window.addEventListener('scroll', scrollHeader);


// Show Scroll to Top
/**
 * Sets the visibility of a scroll-to-top button based on the user's scroll position.
 * If the scroll position is greater than or equal to 560 pixels, the button is shown.
 * Otherwise, the button is hidden.
 */
function scrollTop() {
    const scrollTop = document.getElementById('scroll_up');

    if (this.scrollY >= 560) scrollTop.classList.add('show_scroll'); else scrollTop.classList.remove('show_scroll');
}

window.addEventListener('scroll', scrollTop);



// Dark or Light Theme //
const themeButton = document.getElementById('theme_button');
const darkTheme = 'dark_theme';
const iconTheme = 'uil-sun';

// Local Storage - Prev. selected theme
const selectedTheme = localStorage.getItem('selected_theme');
const selectedIcon = localStorage.getItem('selected_icon');

// Obtaining current theme by calidating the dark_theme class
const getCurrTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// Validating user by previous preference (if any)
if (selectedTheme) {
    // Activate the preferred theme which was stored in localStorage
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate or deactivate theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark theme or icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    // Save current icon and theme of user selected
    localStorage.setItem('selected_theme', getCurrTheme());
    localStorage.setItem('selected_icon', getCurrIcon());
});

//  Submit from Message Section
document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const params = {
        userName: document.getElementById("userName").value,
        userEmail: document.getElementById("userEmail").value,
        project: document.getElementById("project").value,
        message: document.getElementById("message").value
    }

    emailjs.send('service_yh60t0i', 'template_5gnagvj', params).then(function () {
        alert("Successfully sent the data. Dwaraka will contact you shortly.");
        form.reset();
    }, function (error) {
        alert("Error", error, " Please contact Dwaraka through Phone or email. Sorry for the inconvenience.");
    });
});
