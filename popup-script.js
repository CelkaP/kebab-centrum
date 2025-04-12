document.addEventListener('DOMContentLoaded', function () {
    const popupContainer = document.getElementById('popup-container');
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('close-btn');
    const reopenBtn = document.getElementById('reopen-btn');
    const showPopupBtn = document.getElementById('show-popup-btn');

    // Function to show popup with bounce animation
    function showPopup() {
        popupContainer.classList.add('active');
        reopenBtn.classList.remove('active');

        // Add bounce animation
        popup.style.animation = 'bounce 0.5s';

        // Remove animation after it completes
        setTimeout(() => {
            popup.style.animation = '';
        }, 500);
    }

    // Function to hide popup
    function hidePopup() {
        popupContainer.classList.remove('active');
        setTimeout(() => {
            reopenBtn.classList.add('active');
        }, 300);
    }

    // Show popup on page load
    setTimeout(showPopup, 1000);

    // Event listeners
    closeBtn.addEventListener('click', hidePopup);
    reopenBtn.addEventListener('click', showPopup);
    showPopupBtn.addEventListener('click', showPopup);

    // Close popup when clicking outside
    popupContainer.addEventListener('click', function (e) {
        if (e.target === popupContainer) {
            hidePopup();
        }
    });

    // Swipe to close on mobile
    let touchStartY = 0;
    let touchEndY = 0;

    popup.addEventListener('touchstart', function (e) {
        touchStartY = e.changedTouches[0].screenY;
    }, false);

    popup.addEventListener('touchend', function (e) {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    }, false);

    function handleSwipe() {
        if (touchEndY - touchStartY > 100) { // Swipe down
            hidePopup();
        }
    }
});