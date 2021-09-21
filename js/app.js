/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

const sections = document.querySelectorAll("section");
const navBarUL = document.querySelector("#navbar__list");
let navItemIds = []
let navItemNames = []

// Extracts IDs and names of each section and stores them in an array.
sections.forEach(function (section, index) {
navItemIds[index] = section.id;
navItemNames[index] = section.dataset.nav;
});

/* Loops over navItemIds and navItemNames arrays at the same time and
generates navbar items dynamically. (Follows the Udacity's rubric) */
navItemIds.forEach(function navBuilder(navItemId, index) {
    const listElement = document.createElement("li");
    listElement.innerHTML = `<a class="menu__link" href="#${navItemId}">${navItemNames[index]}</a>`
    navBarUL.appendChild(listElement);
});

// Alternative way to set up navbar (Does not follow rubric).
/**
sections.forEach(function navBuilder(element) {
    const navBarItem = `<li>${element.dataset.nav}</li>`;
    const navBarUL = document.querySelector("#navbar__list");
    navBarUL.insertAdjacentHTML('beforeend', navBarItem);
});
 */

// Indicates whether a particular section is in viewport now.
function inViewport(section) {
    const viewport = section.getBoundingClientRect();
    if (viewport.top >= 0) {
        return true;
    }
    else {
        return false;
    }
}


/* Loops over sections and if section is in viewport,
 adds the active class to its DOMTokenList by add(). */
function setActiveViewport() {
    for (let i = 0; i < navItemIds.length; i++) {
        if (inViewport(sections[i])) {
            sections[i].classList.add("your-active-class");
        }
        else {
            sections[i].classList.remove("your-active-class");
        }
    }
}

// Listens for any scrolling event.
document.addEventListener('scroll', setActiveViewport);

