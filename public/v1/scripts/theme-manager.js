let currentThemeSetting = localStorage.getItem("theme") ?? "os";

if (currentThemeSetting === "os")
{
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setTheme(systemTheme);
    updateIcon("fa-solid fa-wand-magic-sparkles");
}
else
{
    setTheme(currentThemeSetting);
    const iconClass = document.querySelector(`.themeOption[data-value=${currentThemeSetting}]`).dataset.icon;
    updateIcon(iconClass);
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", event =>
{
    if (localStorage.getItem("theme") === "os")
    {
        const newSystemTheme = event.matches ? "dark" : "light";
        setTheme(newSystemTheme);
    }
});

function toggleSelectMenu()
{
    const optionsMenu = document.getElementById("themeOptions");
    if (optionsMenu.style.display === "block")
    {
        closeMenu();
    }
    else
    {
        optionsMenu.style.display = "block";
        // Close the theme selection menu if the user clicks outside of it.
        document.addEventListener("click", closeMenuOnMouseClick);
    }
}

function closeMenuOnMouseClick(event)
{
    const optionsMenu = document.getElementById("themeOptions");
    const themeButton = document.getElementById("themeButton");

    if (!optionsMenu.contains(event.target) && !themeButton.contains(event.target))
        closeMenu();
}

function selectTheme(theme)
{
    currentThemeSetting = theme;
    const iconClass = document.querySelector(`.themeOption[data-value=${theme}]`).dataset.icon;
    if (theme === "os")
    {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        setTheme(systemTheme);
    }
    else
    {
        setTheme(theme);
    }
    updateIcon(iconClass);

    // Hide options after selection
    closeMenu();
}

function closeMenu()
{
    document.getElementById("themeOptions").style.display = "none";
    document.removeEventListener("click", closeMenuOnMouseClick);
}

function setTheme(theme)
{
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", currentThemeSetting);
}

function updateIcon(iconClass)
{
    document.getElementById("themeIcon").className = iconClass;
}