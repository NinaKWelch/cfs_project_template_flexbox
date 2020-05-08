/* scripts */

function toggleMenu() {
    const button = document.getElementById("toggle-button");
    const menu = document.getElementById("toggle-menu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
        button.innerHTML = `<i class="fas fa-bars"></i>`;
      } else {
        menu.style.display = "block";
        button.innerHTML = `<i class="fas fa-times"></i>`;
      };

};

function search() {
    // TODO
}