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


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/


/*==================== SHOW SCROLL UP ====================*/


/*==================== DARK LIGHT THEME ====================*/ 