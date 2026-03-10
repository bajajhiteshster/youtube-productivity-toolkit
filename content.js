(function () {

    function handleAds() {
        const video = document.querySelector('video');
        if (!video) return;

        const adPlaying = document.querySelector('.ad-showing');

        if (adPlaying) {
            // Mute ad
            video.muted = true;

            // Fast-forward ad safely
            if (!isNaN(video.duration) && video.duration > 0 && isFinite(video.currentTime)) {
                video.playbackRate = 16; // only during ad
                video.currentTime = Math.min(video.duration - 0.1, video.currentTime + 0.5);
            }

            // Click Skip Ad button if visible
            const skipBtn = document.querySelector(
                '.ytp-ad-skip-button, .ytp-ad-skip-button-modern'
            );
            if (skipBtn) skipBtn.click();
        } 
        else {
            // Do NOT set playbackRate here
            // Let YouTube control normal video speed
            video.muted = false;
        }

        // Close overlay/banner ads
        const overlay = document.querySelector('.ytp-ad-overlay-close-button');
        if (overlay) overlay.click();
    }

    // Observe DOM changes for dynamic ad elements
    const observer = new MutationObserver(handleAds);
    observer.observe(document.body, { childList: true, subtree: true });

    // Backup interval in case observer misses
    setInterval(handleAds, 500);

})();
