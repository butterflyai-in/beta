

var icon = document.getElementById("moonche");
var logo = document.getElementById("logo");
var yt = document.getElementById("yt");

// Check if the user's theme preference is stored in localStorage
var savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    logo.src = "img/butterfly.png";
    yt.src = "img/butterfly.png";
    icon.src = "img/sun.png"; // Update the icon source
    icon.checked = true; // Set the checkbox state to match the theme
} else {
    icon.src = "img/moon.png"; // Set the default icon source for light mode
}

// Handle the slider change event
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        icon.style.opacity = "0"; // Hide the icon
        setTimeout(function () {
            icon.src = "img/sun.png";
            logo.src = "img/butterfly.png";
            yt.src = "img/butterfly.png";
            icon.style.opacity = "1"; // Show the icon with fade-in effect
            icon.classList.add("icon-spin"); // Add the spin animation class
        }, 30); // Wait for 300 milliseconds (same as the transition duration) before changing the icon
        localStorage.setItem("theme", "dark");
    } else {
        icon.style.opacity = "0"; // Hide the icon
        setTimeout(function () {
            icon.src = "img/moon.png";
            logo.src = "img/butterfly2.png";
            yt.src = "img/butterfly2.png";
            icon.style.opacity = "1"; // Show the icon with fade-in effect
            icon.classList.add("icon-spin"); // Add the spin animation class
        }, 30); // Wait for 300 milliseconds (same as the transition duration) before changing the icon
        localStorage.setItem("theme", "light");
    }
    
    // Remove the spin class after the animation completes
    icon.addEventListener("animationend", function () {
        icon.classList.remove("icon-spin");
    });
}