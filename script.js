const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')

// song titles //
const songs = ['Za dużo chcesz', 'Podaruj mi trochę słońca', 'Przytul mnie', 'A Może By', 'Idę dalej']
// Event Listeners //
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});


// Change song //
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);


// Keep track of songs //
let songIndex = 0

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details //
function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
  }

function playSong() {
musicContainer.classList.add('play')
playBtn.querySelector('i.fas').classList.remove('fa-play');
playBtn.querySelector('i.fas').classList.add('fa-pause');
cover.classList.add("play")

audio.play();
}

function pauseSong() {
musicContainer.classList.remove('play');
playBtn.querySelector('i.fas').classList.add('fa-play');
playBtn.querySelector('i.fas').classList.remove('fa-pause');
cover.classList.remove("play")

audio.pause();
}

// Previous song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Next song
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}



// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);

// Time of song
audio.addEventListener('timeupdate',DurTime);