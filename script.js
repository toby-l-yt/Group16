window.onload = function() {
  const music = document.getElementById('bgMusic');

  // 1. Mute initially to bypass autoplay block
  music.muted = true;

  // 2. Start "silent" playback
  music.play()
    .then(() => {
      // 3. Unmute after playback starts
      music.muted = false;
      music.volume = 0.3; // 30% volume

      // 4. Play only once (no loop)
      music.loop = false;
    })
    .catch(e => {
      // Fallback: Show play button if autoplay fails
      console.log("Autoplay blocked:", e);
      document.getElementById('fallbackPlay').style.display = 'block';
    });
};