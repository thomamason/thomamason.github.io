'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const bcBanner = document.getElementById('bc-banner');
  const ytBanner = document.getElementById('yt-banner');
  const bcMediaDropdown = document.getElementById('bcmedia-dropdown');
  const ytMediaDropdown = document.getElementById('ytmedia-dropdown');
  const video = document.querySelector('.fullscreen-video');
  const loadingScreen = document.getElementById('loadingScreen');

  function toggleDropdown(dropdown) {
    if (!dropdown) {
      return;
    }
    dropdown.classList.toggle('open');
  }

  function handleVideoPlayback() {
    if (!video) {
      return;
    }

    if (loadingScreen) {
      loadingScreen.style.display = 'none';
    }

    video.style.display = 'block';
    video.style.opacity = 1;

    const playPromise = video.play();
    if (playPromise && typeof playPromise.then === 'function') {
      playPromise.catch(() => {
        // autoplay may be blocked
      });
    }
  }

  if (bcBanner && bcMediaDropdown) {
    bcBanner.addEventListener('click', () => toggleDropdown(bcMediaDropdown));
  }

  if (ytBanner && ytMediaDropdown) {
    ytBanner.addEventListener('click', () => toggleDropdown(ytMediaDropdown));
  }

  if (video) {
    video.addEventListener('canplaythrough', handleVideoPlayback);
  }

  document.body.addEventListener('touchstart', handleVideoPlayback, { once: true });
});

function openModal() {
  const modal = document.getElementById('modal');
  if (modal) {
    modal.style.display = 'block';
  }
}
  

function closeModal() {
  const modal = document.querySelector('.modal');
  if (modal) {
    modal.style.display = 'none';
  }
}