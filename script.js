const music = document.querySelector('#background-music');
const soundToggle = document.querySelector('.sound-toggle');
const soundLabel = document.querySelector('.sound-label');
const messageTrigger = document.querySelector('.message-trigger');
const modal = document.querySelector('.message-modal');
const modalClose = document.querySelector('.modal-close');

music.addEventListener('error', () => {
  soundLabel.textContent = 'Không đọc được nhạc';
});

const setMusicState = (isPlaying) => {
  soundToggle.classList.toggle('is-playing', isPlaying);
  soundToggle.setAttribute('aria-pressed', String(isPlaying));
  soundToggle.setAttribute('aria-label', isPlaying ? 'Tắt nhạc nền' : 'Bật nhạc nền');
  soundLabel.textContent = isPlaying ? 'Tắt nhạc' : 'Bật nhạc';
};

soundToggle.addEventListener('click', async () => {
  if (music.paused) {
    try {
      await music.play();
      setMusicState(true);
    } catch {
      soundLabel.textContent = 'Chưa có nhạc';
    }
    return;
  }

  music.pause();
  setMusicState(false);
});

messageTrigger.addEventListener('click', () => {
  modal.showModal();
});

modalClose.addEventListener('click', () => {
  modal.close();
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) modal.close();
});

window.addEventListener('load', async () => {
  modal.showModal();
  try {
    await music.play();
    setMusicState(true);
  } catch {
    soundLabel.textContent = 'Bấm để bật nhạc';
    setMusicState(false);
  }
});
