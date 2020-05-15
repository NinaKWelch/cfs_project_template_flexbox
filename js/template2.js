/**
* TEMPLATE 2 JAVASCRIPT
*/

// Toggle navigation 
function toggleMenu2() {
    const menu = document.getElementById("toggleNavigation2");
  
    menu.classList.toggle("show")
}
  
// Change navbar background color on scroll
window.onscroll = function() {
    const topbar = document.querySelector('.topbar2')

    // pageYOffset or scrollY
    if (window.pageYOffset > 0) {
        topbar.classList.add('scrolled')
    } else {
        topbar.classList.remove('scrolled')
    }
}

// Event listener for clicks on like buttons
const likeButtons = document.querySelectorAll('.like2');

likeButtons.forEach(like => like.addEventListener('click', event => {
    event.target.classList.toggle('like2-active');
}))
