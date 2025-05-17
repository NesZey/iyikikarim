// Müzik Paneli
const audioPlayer = document.getElementById("audio-player");

function playMusic() {
    audioPlayer.play();
}

function pauseMusic() {
    audioPlayer.pause();
}

function nextMusic() {
    audioPlayer.src = "music2.mp3"; // Yeni müzik dosyasını ata
    audioPlayer.play();
}

// Görsel Paneli
function changeImage() {
    const image = document.getElementById("image");
    image.src = image.src.includes("image1.jpg") ? "image2.jpg" : "image1.jpg";
}

// Chat Paneli ve Kalp Animasyonu
function sendMessage() {
    const input = document.getElementById("chat-input").value;
    const responseDiv = document.getElementById("chat-response");

    if (input.toLowerCase() === "seni seviyorum") {
        showHeart("Ben de seni seviyorum!");
    } else {
        responseDiv.innerHTML = `<p>${input}</p>`;
    }
}

function showHeart(text) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = `<p>${text}</p>`;
    
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 3000);
}

// Kalp Baloncukları
setInterval(() => {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.innerText = "💖 İyi ki doğdun!";
    
    bubble.style.left = `${Math.random() * 100}%`;
    document.body.appendChild(bubble);
    
    setTimeout(() => bubble.remove(), 5000);
}, 3000);
