(function () {

    function handleAds() {
        const video = document.querySelector('video');
        if (!video) return;

        const adPlaying = document.querySelector('.ad-showing');

        if (adPlaying) {

            // mute ads
            video.muted = true;

            // click skip button
            const skipBtn = document.querySelector(
                '.ytp-ad-skip-button, .ytp-ad-skip-button-modern'
            );

            if (skipBtn) skipBtn.click();

            // close banner ads
            const bannerBtn = document.querySelector(
                '.ytp-ad-overlay-close-button'
            );

            if (bannerBtn) bannerBtn.click();

        } else {

            // restore audio after ad
            video.muted = false;
        }
    }

    const observer = new MutationObserver(handleAds);

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    handleAds();

})();
