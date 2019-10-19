var waktu_parkir, biaya, harga_perjam;
function hitungParkir(waktu_parkir){
    
    if(waktu_parkir <= 3){
        harga_perjam = 2000;
        biaya = harga_perjam * waktu_parkir;
        return console.log(biaya);
    } else if (waktu_parkir >=4){
        harga_perjam = 3000;
        harga_perjam_berikutnya = 1000;
        biaya = harga_perjam_berikutnya * waktu_parkir + harga_perjam;
        if (biaya > 10000){
            console.log("10000");
        } else {
            console.log(biaya);
        }
        
    }

}

hitungParkir(6);