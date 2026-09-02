
const ruteInput = document.getElementById('rute');
const ruteImage = document.getElementById('rute-image');

// Daftar gambar yang sesuai dengan pilihan rute (Ganti nama file sesuai gambar Anda)
const gambarRute = {
    "3 KM": "Rute/3K.jpg",
    "5 KM": "Rute/5K.jpg",
    "10 KM": "Rute/10K.jpg",
    "15 KM": "Rute/15K.jpg",
    "20 KM": "Rute/20K.jpg",
    "21 KM": "Rute/21K.jpg"
};

// Fungsi untuk mendeteksi pilihan pengguna
ruteInput.addEventListener('input', function() {
    const pilihan = ruteInput.value;

    if (gambarRute[pilihan]) {
        ruteImage.src = gambarRute[pilihan]; // Mengubah sumber gambar
        ruteImage.style.display = 'block';   // Menampilkan gambar
    } else {
        ruteImage.style.display = 'none';    // Sembunyikan jika input dihapus/tidak cocok
    }
});

document.getElementById('btn').addEventListener('click', function() {
    // Mengambil nilai dari input rute
    const ruteValue = document.getElementById('rute').value;

    // Validasi apakah pengguna sudah memilih rute
    // if (!ruteValue) {
    //     alert('Silakan pilih rute terlebih dahulu!');
    //     return;
    // }

    // Menentukan link tujuan berdasarkan rute yang dipilih
    let urlTujuan = '';

    switch(ruteValue) {
        case '3 KM':
            urlTujuan = 'https://drive.google.com/drive/folders/1UCB1WFqVXg-LT_5kp9uWheA2uivXDQIl?usp=sharing'; // Ganti dengan link Anda
            break;
        case '5 KM':
            urlTujuan = 'https://drive.google.com/drive/folders/19dUzSkEl2VP2aaYiJlDwbu7J6qalPBQB?usp=sharing'; // Ganti dengan link Anda
            break;
        case '10 KM':
            urlTujuan = 'https://drive.google.com/drive/folders/1yP0cf0-3Rot7eexAhI4xTo1tVPIptZOe?usp=sharing'; // Ganti dengan link Anda
            break;
        case '15 KM':
            urlTujuan = 'https://drive.google.com/drive/folders/1Ju8aHVAreVEAMMM8N5rE35d4lralwyA1?usp=sharing'; // Ganti dengan link Anda
            break;
        case '20 KM':
            urlTujuan = 'https://drive.google.com/drive/folders/1ZXko7SQUtl3BEmadx9kzwDGcr8ISwLhQ?usp=sharing'; // Ganti dengan link Anda
            break;
        case '21 KM':
            urlTujuan = 'https://drive.google.com/drive/folders/1bt_e1yG_Z6eUPuKNTWoIbBDp8Nks0SsZ?usp=sharing'; // Ganti dengan link Anda
            break;
        default:
            alert('Rute tidak valid! Silakan pilih dari daftar.');
            return;
    }

    // Membuka link baru di tab yang sama
    // window.location.href = urlTujuan;

    // ATAU buka di tab baru dengan kode di bawah ini:
    window.open(urlTujuan, '_blank');
});
