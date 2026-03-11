(function () {

    // --- 1️⃣ Handle ads ---
    function handleAds() {
        const video = document.querySelector('video');
        if (!video) return;

        const adPlaying = document.querySelector('.ad-showing');

        if (adPlaying) {
            // mute ads
            video.muted = true;

            // click skip button if available
            const skipBtn = document.querySelector(
                '.ytp-ad-skip-button, .ytp-ad-skip-button-modern'
            );
            if (skipBtn) skipBtn.click();

            // close overlay ads
            const bannerBtn = document.querySelector(
                '.ytp-ad-overlay-close-button'
            );
            if (bannerBtn) bannerBtn.click();

        } else {
            // restore audio after ad
            video.muted = false;
        }
    }

    // --- 2️⃣ Optional productivity features ---
    function applyProductivityFeatures() {
        // Hide Shorts
        document.querySelectorAll('a[href^="/shorts"]').forEach(el => el.style.display = 'none');

        // Focus Mode: hide sidebar recommendations
        const sidebar = document.getElementById('related');
        if (sidebar) sidebar.style.display = 'none';
    }

    // --- 3️⃣ Observe DOM for dynamic elements ---
    function observeDOM() {
        const observer = new MutationObserver(() => {
            handleAds();
            applyProductivityFeatures();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        // Initial run
        handleAds();
        applyProductivityFeatures();
    }

    // Start everything
    observeDOM();

})();
