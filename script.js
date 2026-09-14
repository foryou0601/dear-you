const music = document.querySelector('#background-music');
const scene = document.querySelector('.scene');
const journeyButton = document.querySelector('.journey-button');
const messageTrigger = document.querySelector('.message-trigger');
const modal = document.querySelector('.message-modal');
const modalClose = document.querySelector('.modal-close');

const playMusic = async () => {
  try {
    await music.play();
    document.removeEventListener('pointerdown', playMusic);
    document.removeEventListener('keydown', playMusic);
    document.removeEventListener('click', playMusic, true);
  } catch {
    // Chrome and Edge may wait for a user gesture before allowing audio.
  }
};

music.volume = 1;

journeyButton.addEventListener('click', async () => {
  scene.classList.add('is-started');
  await playMusic();
  modal.hidden = false;
  requestAnimationFrame(() => modal.classList.add('is-visible'));
});

messageTrigger.addEventListener('click', () => {
  modal.hidden = false;
  requestAnimationFrame(() => modal.classList.add('is-visible'));
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('is-visible');
  modal.hidden = true;
});

