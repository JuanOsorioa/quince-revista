const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');
const progressWrap = document.getElementById('progressWrap');

const tracks = ['src/audio.mp3'];
let currentTrack = 0;

// 1. ACTIVAR EL BUCLE AUTOMÁTICO
audio.loop = true; 

function formatTime(s) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60).toString().padStart(2, '0');
  return `${m}:${sec}`;
}

function loadTrack(index) {
  currentTrack = index;
  audio.src = tracks[currentTrack];
  audio.load();
  playBtn.innerHTML = '&#9654;';
  progressBar.style.width = '0%';
}

function togglePlay() {
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = '&#9646;&#9646;';
  } else {
    audio.pause();
    playBtn.innerHTML = '&#9654;';
  }
}

function playPrevious() {
  audio.currentTime = 0;
  // Si estaba pausado, se queda pausado. Si estaba sonando, sigue sonando desde el inicio.
  progressBar.style.width = '0%';
}

function playNext() {
  if (!audio.duration) return;
  // En un sistema de una sola pista con loop, "Siguiente" suele reiniciar la pista
  audio.currentTime = 0;
  progressBar.style.width = '0%';
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', playPrevious);
nextBtn.addEventListener('click', playNext);

audio.addEventListener('timeupdate', () => {
  if (!audio.duration) return;
  const pct = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = pct + '%';
});

// 2. MODIFICAR EL EVENTO 'ENDED'
// Al tener audio.loop = true, el evento 'ended' NO se dispara en la mayoría de navegadores modernos.
// Pero por seguridad, si quieres que el botón siempre refleje que está sonando:
audio.addEventListener('ended', () => {
  if (audio.loop) {
    audio.play();
    playBtn.innerHTML = '&#9646;&#9646;';
  } else {
    playBtn.innerHTML = '&#9654;';
    progressBar.style.width = '0%';
  }
});

progressWrap.addEventListener('click', e => {
  const rect = progressWrap.getBoundingClientRect();
  const pct = (e.clientX - rect.left) / rect.width;
  audio.currentTime = pct * audio.duration;
});