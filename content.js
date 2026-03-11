(function () {

    function skipAd() {
        const video = document.querySelector('video');
        if (!video) return;

        const ad = document.querySelector('.ad-showing');

        if (ad) {

            video.muted = true;

            if (isFinite(video.currentTime)) {
                video.currentTime += 2;
            }

            const skip = document.querySelector(
                '.ytp-ad-skip-button, .ytp-ad-skip-button-modern'
            );

            if (skip) skip.click();

        } else {
            video.muted = false;
        }

        const banner = document.querySelector('.ytp-ad-overlay-close-button');
        if (banner) banner.click();
    }

    const observer = new MutationObserver(skipAd);

    observer.observe(document.body, {
        attributes: true,
        childList: true,
        subtree: true
    });

})();
