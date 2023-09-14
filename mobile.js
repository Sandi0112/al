$(document).ready(function() {
    var container = $('.container-categories');
    if (container[0].scrollHeight > container.outerHeight()) {
        container.addClass('scrollable');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const overlay = document.getElementById("overlay");

    menuIcon.addEventListener("click", function () {
        dropdownMenu.style.display = "block";
        overlay.style.display = "block";
    });

    overlay.addEventListener("click", function () {
        dropdownMenu.style.display = "none";
        overlay.style.display = "none";
    });
});

