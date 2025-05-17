// MÜZİK YÖNETİMİ
const muzikPlayer = document.getElementById('muzik');
const muzikListesi = ['song1.mp3', 'song2.mp3'];

function muzikDegistir(muzikDosyasi) {
    muzikPlayer.src = `assets/muzikler/${muzikDosyasi}`;
    muzikPlayer.play();
}

// RESİM DEĞİŞTİRME
const resimler = ['foto1.jpg', 'foto2.jpg'];
let resimIndex = 0;

function resimDegistir() {
    resimIndex = (resimIndex + 1) % resimler.length;
    document.getElementById('resim').src = `assets/resimler/${resimler[resimIndex]}`;
}

// GERİ SAYIM (16.05.2024)
function gunleriHesapla() {
    const baslangic = new Date(2024, 4, 16); // Mayıs=4 (0'dan başlar)
    const bugun = new Date();
    const fark = bugun - baslangic;
    const gunSayisi = Math.floor(fark / (86400000)) + 1; // +1 bugünü dahil etmek için
    
    document.getElementById('gun-sayisi').textContent = gunSayisi;
    
    // Özel gün kontrolü
    if (bugun.getDate() === 16 && bugun.getMonth() === 4) {
        kalpYagmuruBaslat();
        document.querySelector('[data-tarih="16.05"]').classList.add('ozel-gun');
    }
}

// KALP YAĞMURU
function kalpYagmuruBaslat() {
    const body = document.body;
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const kalp = document.createElement('div');
            kalp.innerHTML = '💖';
            kalp.style.position = 'fixed';
            kalp.style.left = `${Math.random() * 100}vw`;
            kalp.style.top = '-50px';
            kalp.style.fontSize = `${Math.random() * 30 + 20}px`;
            kalp.style.animation = `yagmur ${Math.random() * 3 + 2}s linear`;
            kalp.style.zIndex = '99';
            body.appendChild(kalp);
            
            setTimeout(() => kalp.remove(), 5000);
        }, i * 200);
    }
}

// AŞK METRELERİ
setInterval(() => {
    const sevgi = document.getElementById('sevgi');
    const nese = document.getElementById('nese');
    
    let yeniSevgi = Math.min(100, parseInt(sevgi.textContent) + Math.floor(Math.random() * 3));
    let yeniNese = Math.min(100, parseInt(nese.textContent) + Math.floor(Math.random() * 4));
    
    sevgi.textContent = yeniSevgi;
    nese.textContent = yeniNese;
    
    document.querySelectorAll('.dolum')[0].style.width = `${yeniSevgi}%`;
    document.querySelectorAll('.dolum')[1].style.width = `${yeniNese}%`;
}, 3000);

// BALONCUKLAR
const baloncukMetinleri = [
    "İyi ki doğdun!", "Seni seviyorum", "Nice yıllara", 
    "Mutlu yıllar!", "Aşkım", "💖", "16.05.2024"
];

setInterval(() => {
    const baloncuk = document.createElement('div');
    baloncuk.className = 'baloncuk';
    
    const size = Math.random() * 60 + 40;
    baloncuk.style.width = `${size}px`;
    baloncuk.style.height = `${size}px`;
    baloncuk.style.left = `${Math.random() * 100}vw`;
    baloncuk.style.fontSize = `${size / 3}px`;
    
    baloncuk.textContent = baloncukMetinleri[
        Math.floor(Math.random() * baloncukMetinleri.length)
    ];
    
    document.getElementById('baloncuklar').appendChild(baloncuk);
    
    setTimeout(() => baloncuk.remove(), 8000);
}, 1500);

// SAYFA YÜKLENİNCE
window.onload = gunleriHesapla;