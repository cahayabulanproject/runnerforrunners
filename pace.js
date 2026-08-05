// Function for Pace
const btnPC = document.getElementById("btn");
const pacePC = document.getElementById("pace-result");
const paceStatusPC = document.getElementById("pace-status");

function calculatePACE(){
    const kilometerValue = document.getElementById("km").value;
    const timeValue = document.getElementById("time").value;
    const paceValue = (timeValue / kilometerValue).toFixed(2);

    //pacePC.value = paceValue + " /Km"; 

     if (timeValue && kilometerValue > 0){
        pacePC.value = paceValue + " /Km";
        
        // Ubah string paceValue menjadi angka agar aman saat dibandingkan di if-else bawah
        const paceNumber = parseFloat(paceValue);

        // Menentukan status berdasarkan angka desimal pace
        if (paceNumber > 8.00){
            paceStatusPC.innerText = "Beginner";
        } else if (paceNumber >= 6.30 && paceNumber <= 8.00){ // Diubah ke <= 8.00 agar tidak ada angka yang terlewat
            paceStatusPC.innerText = "Intermediate";
        } else if (paceNumber >= 5.15 && paceNumber < 6.30){
            paceStatusPC.innerText = "Advanced Recreational";
        } else if (paceNumber >= 4.00 && paceNumber < 5.15){
            paceStatusPC.innerText = "Competitor/Amatir Serius";
        } else if (paceNumber < 4.00){
            paceStatusPC.innerText = "Elite/Profesional";
        }

    } else {
        // Jika salah satu input kosong atau 0, kosongkan semua hasil keluaran
        pacePC.value = "Masukan km & menit";
        paceStatusPC.innerText = ""; // 👈 Bagian ini untuk mengosongkan status teks
    }
}

btnPC.addEventListener("click", calculatePACE);



