const music = document.querySelector('#background-music');
const messageTrigger = document.querySelector('.message-trigger');
const modal = document.querySelector('.message-modal');
const modalClose = document.querySelector('.modal-close');

const playMusic = async () => {
  try {
    await music.play();
    document.removeEventListener('pointerdown', playMusic);
    document.removeEventListener('keydown', playMusic);
  } catch {
    // Chrome and Edge may wait for a user gesture before allowing audio.
  }
};

music.autoplay = true;
music.volume = 1;
music.load();
window.addEventListener('load', playMusic, { once: true });
music.addEventListener('canplay', playMusic, { once: true });
document.addEventListener('pointerdown', playMusic);
document.addEventListener('keydown', playMusic);

messageTrigger.addEventListener('click', () => {
  if (!modal.open) modal.showModal();
});

modalClose.addEventListener('click', () => {
  modal.close();
});

modal.addEventListener('cancel', (event) => {
  event.preventDefault();
});

window.addEventListener('load', () => {
  if (!modal.open) modal.showModal();
});
