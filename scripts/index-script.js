const hamburgerMenu = document.querySelector(".header-links");
let menuOpened;

window.onresize = screenResized;
document.getElementById("hamburgerBtn").addEventListener("click", toggleHamburgerMenu);

function toggleHamburgerMenu(e)
{
    if (menuOpened)
    {
        hamburgerMenu.style.display = "none";
        console.log('none')
        menuOpened = false;
        document.getElementById("hamburgerBtn").querySelector("i").className = "fa-solid fa-bars fa-flip";
        hamburgerMenu.classList.remove('header-links-fade');
    }
    else if (!menuOpened)
    {
        hamburgerMenu.style.display = (window.innerWidth > 800) ? "contents" : "flex";
        menuOpened = true;
        document.getElementById("hamburgerBtn").querySelector("i").className = "fa-solid fa-xmark fa-spin fa-spin-reverse";
    }

    // Prevent the document.onclick event from triggering by disabling event bubbling. 
    if (e !== undefined) e.stopPropagation();
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
}

function closeSideBarOnMobile()
{
    if (window.innerWidth < 800) toggleHamburgerMenu();
}

// Card template declaration.
class CardComponent extends HTMLElement
{
    connectedCallback()
    {
        const template = document.getElementById('card-template');
        const content = template.content.cloneNode(true);

        const cardElement = content.querySelector('.card');
        cardElement.setAttribute('onclick', `location.href='${this.getAttribute('url')}';`);
        cardElement.setAttribute('title', '');
        content.querySelector('.card-image').setAttribute('alt', this.getAttribute('img-alt'));
        content.querySelector('.card-image').setAttribute('src', this.getAttribute('img-src'));
        content.querySelector('.card-title').innerText = this.getAttribute('title');
        content.querySelector('.card-desc').innerText = this.getAttribute('desc');
        content.querySelector('.card-src-link').setAttribute('href', this.getAttribute('src-url'));
        content.querySelector('.card-cta').setAttribute('href', this.getAttribute('url'));

        const tagsElement = content.querySelector('.card-tags');
        const tags = this.getAttribute('tags');
        if (tags)
        {
            const tagsArray = tags.split(',');
            tagsArray.forEach(tag =>
            {
                const tagElement = document.createElement('span');
                tagElement.textContent = tag.trim();
                tagsElement.appendChild(tagElement);
            });
        }

        // Set the display of the parent (the new element that is replacing the <template> tag) to contents to prevent it from interfering with layout.
        this.style.display = 'contents';
        this.appendChild(content);
    }
}

customElements.define('card-component', CardComponent);

function showMore()
{
    //removes the link
    // document.getElementById('link').parentElement.removeChild('link');
    //shows the #more
    document.getElementById('more').style.display = "block";
}