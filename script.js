/******** FOTOĞRAFLAR ********/
const photos = ["foto1.jpg","foto2.jpg","foto3.jpg","foto4.jpg","foto5.jpg","foto6.jpg","foto7.jpg","foto8.jpg","foto9.jpg","foto10.jpg","foto11.jpg""foto12.jpg","foto13.jpg","foto14.jpg",];
let currentPhoto = 0;
setInterval(()=> {
  currentPhoto = (currentPhoto+1)%photos.length;
  document.getElementById("photo").src = photos[currentPhoto];
}, 5000);

/******** FOTOĞRAFLAR ********/
const photos = ["foto1.jpg","foto2.jpg","foto4.jpg","foto5.jpg","foto3.jpg"];
let currentPhoto = 0;
setInterval(()=> {
  currentPhoto = (currentPhoto+1)%photos.length;
  document.getElementById("photo").src = photos[currentPhoto];
}, 5000);

/******** MÜZİK OYNATICI ********/
const tracks = [
  {src:"sarki1.mp3", name:"Şarkı 1"},
  {src:"sarki2.mp3", name:"Şarkı 2"},
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
function showNote(){ document.getElementById("note-popup").style.display="block"; }
function hideNote(){ document.getElementById("note-popup").style.display="none"; }

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


/******** NOT <3 ********/
function showNote() {
  document.getElementById("note-panel").classList.add("show");
}
function hideNote() {
  document.getElementById("note-panel").classList.remove("show");
}


/******** BÜYÜK BALON ********/
const balloonTexts = [
  "Bugün bizim için çok özel bir gün. Hem senin doğum günün hem de tam 1 yıldır hayatımda olduğun, birlikte yürüdüğümüz o güzel yolculuğun başlangıç yıldönümü. Sana nasıl teşekkür etsem, hangi kelimelerle sevgimi anlatsam bilmiyorum. Hayatıma girdiğin o ilk günden beri her şey daha renkli, daha anlamlı ve daha huzurlu. Senin gülüşünle sabahlarım aydınlanıyor, sesinle günüm güzelleşiyor. Varlığın bana güven veriyor, kalbime dokunduğun her an içimi sımsıcak bir sevgi sarıyor ❤. Bazen sadece yanımda olman bile yetiyor iyi hissetmeme. Seninle geçirdiğim her dakika, her an, benim için bir ömre bedel. Birlikte güldük, birlikte sustuk, birlikte büyüdük. Seninle bir yıl geçmiş ama sanki bir ömür gibi dolu dolu, anlamlı ve gerçekti. Seninle nice senelere ulaşmak, hayalini kurduğumuz o geleceği adım adım inşa etmek istiyorum. Doğum günün kutlu olsun aşkım, iyi ki doğdun, iyi ki varsın, iyi ki benimlesin ❤. Seni her şeyden çok seviyorum.",
  "Seninle geçirdiğim bu bir yıl, bana gerçek sevgiyi, sadakati ve huzuru öğretti. Her tartışmamızda bile daha çok bağlandım sana, her gülüşünde bir kez daha âşık oldum. Bana gösterdiğin sabır, verdiğin sevgi, kurduğun o güvenli alan için sonsuz teşekkür ederim. Seninle geçirdiğim zamanlarda kendimi daha çok tanıdım, seninle birlikte kendimi de sevmeyi öğrendim. Kalbimin en derin yerinde taşıyorum seni, öyle bir yer ki kimse dokunamaz, kimse silemez. Hayat bazen zor, bazen yorucu, ama sen yanımdayken her şey kolay geliyor 🍯. Omzuna yaslandığımda dünyanın tüm yükü hafifliyor, gözlerinin içine baktığımda geleceği görüyorum. Ve inan bana, seninle kurduğum hayallerin bir tanesinden bile vazgeçmeye hiç niyetim yok. Ne yaşarsak yaşayalım, ben hep senin yanında olacağım; elini tuttuğum ilk gün verdiğim sözü tutacağım: seni hep seveceğim, koruyacağım, destekleyeceğim ❤.",
  "Sen sadece sevgilim değil, aynı zamanda en yakın dostum, sırdaşım, hayat ortağımsın. Birlikte öğrendik birbirimizi sevmeyi, anlamayı, sarılmayı. Senin gözlerindeki ışığı gördüğümde kendimi en doğru yerde hissediyorum. İyi ki seni tanımışım, iyi ki kalbimde sana yer açmışım. Bu yıl dönümümüz ve doğum günün, bizim için bir başlangıç sadece. Daha yaşayacak o kadar çok anımız, paylaşacak o kadar çok gülüşümüz var ki. Seninle her geçen gün biraz daha tamamlanıyorum. Seni çok seviyorum ve her geçen gün daha da çok seveceğim ❤.
",
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
