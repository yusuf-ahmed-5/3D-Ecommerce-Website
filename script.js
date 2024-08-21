// Select the video element and new elements
const video = document.getElementById('background-video');
const scrollText = document.getElementById('scroll-text');
const ctaContainer = document.getElementById('cta-container');

// Set the initial frame to display and pause the video
video.currentTime = 0;
video.pause(); // Pause the video initially

// Update the scroll event to control the video playback and text visibility
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const percentageScrolled = scrollPosition / maxScroll;
    const videoDuration = video.duration;

    // Set the video's current time based on scroll position
    video.currentTime = videoDuration * percentageScrolled;

    // Show or hide the text and CTA based on scroll position
    if (scrollPosition > 150) { // Show the text and CTA after scrolling 150px
        scrollText.style.opacity = 1;
        ctaContainer.style.opacity = 1;
    } else {
        scrollText.style.opacity = 0;
        ctaContainer.style.opacity = 0;
    }
});

// Prevent the video from auto-playing at the start
video.addEventListener('loadeddata', () => {
    video.currentTime = 0; // Reset to the first frame on load
    video.pause(); // Ensure the video remains paused
});