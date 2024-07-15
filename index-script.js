const hamburgerMenu = document.querySelector(".header-links");
let menuOpened;
let currentThemeSetting = localStorage.getItem("theme") ?? "light";
setTheme(currentThemeSetting);

window.onresize = screenResized;
document.getElementById("hamburgerBtn").addEventListener("click", toggleHamburgerMenu);

function toggleHamburgerMenu(e)
{
    if (menuOpened)
    {
        hamburgerMenu.style.display = "none";
        menuOpened = false;
        document.getElementById("hamburgerBtn").querySelector("i").className = "fa-solid fa-bars fa-flip";
        hamburgerMenu.classList.remove('header-links-fade');
        document.removeEventListener("click", hideHamburgerMenuOnOutsideClick);
    }
    else if (!menuOpened)
    {
        hamburgerMenu.style.display = "flex";
        menuOpened = true;
        document.getElementById("hamburgerBtn").querySelector("i").className = "fa-solid fa-xmark fa-spin fa-spin-reverse";
        document.addEventListener("click", hideHamburgerMenuOnOutsideClick);
    }

    // Prevent the document.onclick event from triggering by disabling event bubbling. 
    if (e !== undefined) e.stopPropagation();
}

/**
 * Hide the hamburger menu when the user clicks outside of it.
 */
function hideHamburgerMenuOnOutsideClick(mouseClick)
{
    if (!document.querySelector(".header-links").contains(mouseClick.target))
        toggleHamburgerMenu();
}

/**
 * Show/Hide the hamburger menu when the screen is resized to certain thresholds.
 */
function screenResized()
{
    // Enable the links div on desktop. 
    if (window.innerWidth > 800 && !menuOpened) toggleHamburgerMenu();
    // Disable the links div on mobile. 
    else if (window.innerWidth < 800 && menuOpened) toggleHamburgerMenu();

    // Disable hiding the hamburger menu when the screen resizes.
    document.removeEventListener("click", hideHamburgerMenuOnOutsideClick);
}

function toggleTheme()
{
    currentThemeSetting = currentThemeSetting === "dark" ? "light" : "dark";
    setTheme(currentThemeSetting);
}

function setTheme(theme)
{
    document.querySelector("html").setAttribute("data-theme", theme);

    // Change the toggle button icon.
    let icon = theme === "light" ? "fa-solid fa-moon fa-fade" : "fa-solid fa-sun fa-beat";
    document.getElementById("themeToggle").querySelector("i").className = icon;

    localStorage.setItem("theme", theme);
}
