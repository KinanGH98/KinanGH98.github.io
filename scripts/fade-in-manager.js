document.addEventListener('DOMContentLoaded', () =>
{
    const fadeIns = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) =>
    {
        entries.forEach(entry =>
        {
            if (entry.isIntersecting)
            {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the animation has been triggered
            }
        });
    }, {threshold: 0.5}); // Adjust the threshold as needed

    fadeIns.forEach(fadeIn =>
    {
        observer.observe(fadeIn);
    });
});