document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.navbar');

    // If header element is not found, exit to prevent errors
    if (!header) {
        console.warn('Header element with class "navbar" not found. Scroll-to-hide behavior will not be applied.');
        return;
    }

    let lastScrollTop = 0;
    const headerHeight = header.offsetHeight; // Get the actual height of the header
    const scrollThreshold = 5; // A small threshold in pixels to prevent hiding on minor scrolls near the top

    // Check if header has a valid height
    if (headerHeight === 0) {
        console.warn('Header height is 0. Scroll-to-hide behavior might not work correctly. Ensure header has content or a defined height in CSS.');
    }

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Determine scroll direction and apply styles
        if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
            // Scrolling Down: Header hiding logic disabled
            // header.style.top = `-${headerHeight}px`;
        } else if (scrollTop < lastScrollTop || scrollTop <= scrollThreshold) {
            // Scrolling Up or at/near the top: Ensure header is shown (it will default to top: 0 from CSS)
            // header.style.top = '0'; // This line can also be commented out or removed as top:0 is the default state
        }

        // Update lastScrollTop, ensuring it's not negative
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, { passive: true }); // Use a passive listener for better scroll performance
});