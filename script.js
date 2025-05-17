/******** FOTOĞRAFLAR ********/
const photos = ["images/foto1.jpg","images/foto2.jpg","images/foto3.jpg"];
let currentPhoto = 0;
setInterval(()=> {
  currentPhoto = (currentPhoto+1)%photos.length;
  document.getElementById("photo").src = photos[currentPhoto];
}, 5000);

/******** MÜZİK OYNATICI ********/
const tracks = [
  {src:"music/sarki1.mp3", name:"Şarkı 1"},
  {src:"music/sarki2.mp3", name:"Şarkı 2"},
];
let currentTrack = 0;
const player = document.getElementById("player");
const trackName = document.getElementById("track-name");
const playBtn = document.getElementById("play-pause");
const nextBtn = document.getElementById("next");

function loadTrack(i){
  currentTrack = i;
  player.src = tracks[i].src;
  trackName.textContent = tracks[i].name;
}
function togglePlay(){
  if(player.paused){ player.play(); playBtn.textContent="⏸︎"; }
  else{ player.pause(); playBtn.textContent="⏵︎"; }
}
function nextTrack(){
  loadTrack( (currentTrack+1)%tracks.length );
  player.play();
  playBtn.textContent="⏸︎";
}
playBtn.onclick = togglePlay;
nextBtn.onclick = nextTrack;
loadTrack(0);

/******** NOT <3 ********/
function showNote() {
  document.getElementById("note-panel").classList.add("show");
}
function hideNote() {
  document.getElementById("note-panel").classList.remove("show");
}


/******** BÜYÜK BALON ********/
const balloonTexts = [
  "Seninle her gün biraz daha âşık oluyorum 💖",
  "Gülüşün güneşim gibi, hayatıma ışık katıyor ☀️",
  "Kalbim hep 'sen' diye atıyor 💓",
];
function showBigBalloon(i){
  document.getElementById("balloon-text").innerText=balloonTexts[i];
  document.getElementById("big-balloon").style.display="flex";
}
function hideBigBalloon(){
  document.getElementById("big-balloon").style.display="none";
}

/******** UÇUŞAN KALPLER ********/
const lovePhrases = [
  "Seni seviyorum! 💌",
  "İyi ki varsın! 🌟",
  "Kalbim seninle 💗",
  "Her şeyimsin 💫",
  "Birlikte nice yıllara! 🥂",
  "Gülüşüne kurban 😍",
  "Dünyam sensin 🌍",
  "Rüyam gerçek oldu 🌙",
];
function spawnHeart(){
  const heart = document.createElement("div");
  heart.className="heart";
  heart.textContent = lovePhrases[Math.floor(Math.random()*lovePhrases.length)];
  heart.style.left = Math.random()*90 + "vw";
  heart.style.bottom = "-40px";
  document.getElementById("heart-container").appendChild(heart);
  setTimeout(()=>heart.remove(),3000);
}
setInterval(spawnHeart, 800);
