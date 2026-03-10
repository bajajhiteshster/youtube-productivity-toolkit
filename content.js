(function () {

function removeAds() {

    const video = document.querySelector('video');

    // If ad is playing
    if (document.querySelector('.ad-showing')) {

        if (video) {
            video.muted = true;
            video.playbackRate = 16;
            video.currentTime = video.duration;
        }

        // Skip button
        const skip = document.querySelector(
            '.ytp-ad-skip-button, .ytp-ad-skip-button-modern'
        );

        if (skip) {
            skip.click();
        }
    }

    // Close banner ads
    const banner = document.querySelector('.ytp-ad-overlay-close-button');

    if (banner) {
        banner.click();
    }

    // Optional: set normal playback speed
    if (video && !document.querySelector('.ad-showing')) {
        video.playbackRate = 1.25;
    }
}

// Observe page changes
const observer = new MutationObserver(removeAds);

observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Run repeatedly
setInterval(removeAds, 500);

})();
