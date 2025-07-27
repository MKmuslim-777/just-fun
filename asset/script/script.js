document.addEventListener('DOMContentLoaded', () => {
    const iconicCard = document.getElementById('iconicCard');
    const fullscreenVideo = document.getElementById('fullscreenVideo');
    const videoPlayer = document.getElementById('videoPlayer');
    const closeBtn = document.getElementById('closeBtn');

    // Open fullscreen video on card click
    iconicCard.addEventListener('click', () => {
        fullscreenVideo.style.display = 'flex';
        videoPlayer.requestFullscreen().catch(err => {
            console.error('Fullscreen error:', err);
        });
        videoPlayer.play();
    });

    // Close video
    closeBtn.addEventListener('click', () => {
        fullscreenVideo.style.display = 'none';
        videoPlayer.pause();
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
    });
});