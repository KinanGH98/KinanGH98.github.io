const hamburgerMenu = document.querySelector(".header-links");
let menuOpened;
let currentThemeSetting = localStorage.getItem("theme") ?? "dark";
setTheme(currentThemeSetting);

window.onresize = menuResized;

function toggleHamburgerMenu()
{
    if (menuOpened)
    {
        hamburgerMenu.style.display = "none";
        menuOpened = false;
    }
    else if (!menuOpened)
    {
        hamburgerMenu.style.display = "flex";
        menuOpened = true;
    }
}

function menuResized()
{
    // Enable the links div on desktop. 
    if (window.innerWidth > 800 && !menuOpened)
    {
        toggleHamburgerMenu();
        return;
    }

    // Disable the links div on mobile. 
    if (window.innerWidth < 800 && menuOpened) toggleHamburgerMenu();
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
    let icon = theme === "light" ? "fa-solid fa-moon" : "fa-solid fa-sun";
    document.getElementById("themeToggle").querySelector("i").className = icon;

    localStorage.setItem("theme", theme);
}
