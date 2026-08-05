// Function for HR
const btnHR = document.getElementById("btn");
const hrPC = document.getElementById("hr-result");
const inputZona = document.getElementById('zona');
const dataList = document.getElementById('zonaList'); // Perhatikan huruf L besar
const hrStatusPC = document.getElementById("hr-status");

function calculateHR() {
    const ageValue = document.getElementById("age").value;
    // Pastikan nama variabel dataList sama dengan di atas (menggunakan L besar)
    const optionTerpilih = dataList.querySelector(`option[value="${inputZona.value}"]`);
    // Ambil nilai umur dalam bentuk angka, beri nilai default 0 jika kosong
    const age = parseFloat(ageValue) || 0;
    const hrAge = 220 - age;

    if (optionTerpilih && ageValue > 0) {
        const rawValue = optionTerpilih.getAttribute('data-value'); // Hasilnya "0.5,0.6"
        const nilaiArray = rawValue.split(','); // Hasilnya ["0.5", "0.6"]

        // Mengubah teks menjadi angka
        const nilaiPertama = parseFloat(nilaiArray[0]); // 0.5
        const nilaiKedua = parseFloat(nilaiArray[1]);   // 0.6

        // KALKULASI: Kalikan hrAge dengan nilai desimal dari data-value
        const hrMin = hrAge * nilaiPertama; // Misal: 200 * 0.5 = 100
        const hrMax = hrAge * nilaiKedua;   // Misal: 200 * 0.6 = 120

        // Menampilkan hasil dalam bentuk rentang teks ke input/elemen hasil
        // Math.round digunakan agar hasilnya berupa angka bulat (tidak ada desimal .5)
        hrPC.value = `${Math.round(hrMin)} - ${Math.round(hrMax)} BPM`;

        if(rawValue == "0.5,0.6"){
            hrStatusPC.innerText = "Low - Medium";
        }else if(rawValue == "0.6,0.7"){
            hrStatusPC.innerText = "Medium";
        }else if(rawValue == "0.7,0.8"){
            hrStatusPC.innerText = "Medium - High";
        }else if(rawValue == "0.8,0.9"){
            hrStatusPC.innerText = "High";
        }else if(rawValue == "0.9,1.0"){
            hrStatusPC.innerText = "Very High";
        }

    } else {
        // Jika zona belum dipilih atau salah ketik
        hrPC.value = "Masukan age & zona";
        hrStatusPC.innerText = "";
    }
}

btnHR.addEventListener("click", calculateHR);
