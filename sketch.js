let satu;
let tiga;
let lima;
let delapan;
let sebelas;
let empatelas;
let b;

function preload(){
  satu = loadImage("satu.png");
  tiga = loadImage("tiga.png");
  lima = loadImage("lima.png");
  delapan = loadImage('delapan.png');
  sebelas = loadImage("sebelas.png");
  empatbelas = loadImage("empatbelas.png");
  
}

function setup() {
  createCanvas(1250, 1500);
  let a = createA('https://colab.research.google.com/drive/1PP5ObsrzLmjNZ2vBbXA5wsE1m6luFxuh?usp=sharing', 'https://colab.research.google.com/drive/1PP5ObsrzLmjNZ2vBbXA5wsE1m6luFxuh?usp=sharing');
  a.position(50, 1220);
  let b = createA('https://21-046-vsna.github.io/Grafik_Peluruhan_Carbon/', 'https://21-046-vsna.github.io/Grafik_Peluruhan_Carbon/');
  b.position(50, 1270);
  let c = createA('https://fmipa.um.ac.id/wp-content/uploads/Prosiding2015/Teori-Komputasi/Fisika2015_11-Teori-Widjianto.pdf', 'https://fmipa.um.ac.id/wp-content/uploads/Prosiding2015/Teori-Komputasi/Fisika2015_11-Teori-Widjianto.pdf');
  c.position(900, 860);
  let d = createA('https://p2k.stekom.ac.id/ensiklopedia/Penanggalan_radiokarbon', 'https://p2k.stekom.ac.id/ensiklopedia/');
  d.position(900,940);
                  
}

function draw() {
  //Tampilan
  background('gainsboro');
  ////Lingkarang oren
  fill('orange');
  stroke(2);
  ellipse(100, 40, 60, 60);
  ////bentuk molekul carbon atas
  fill('blue');
  ellipse(510, 100, 10, 10);
  ellipse(515, 90, 10, 10);
  fill('red');
  ellipse(507, 95, 10, 10);
  ellipse(505, 90, 10, 10);
  ellipse(510, 75, 10, 10);
  fill('red');
  ellipse(510, 80, 10, 10);
  ellipse(490, 95, 10, 10);
  fill('blue');
  ellipse(510, 90, 10, 10);
  ellipse(490, 90, 10, 10);
  fill('red');
  ellipse(495, 85, 10, 10);
  ellipse(495, 95, 10, 10);
  fill('blue');
  ellipse(520, 85, 10, 10);
  ellipse(495, 100, 10, 10);
  fill('red');
  ellipse(515, 85, 10, 10);
  ellipse(500, 100, 10, 10);
  fill('blue');
  ellipse(500, 80, 10, 10);
  ellipse(502, 85, 10, 10);
  ////bentuk molekul carbon tengah
  fill('blue');
  ellipse(20, 500, 10, 10);
  ellipse(25, 490, 10, 10);
  fill('red');
  ellipse(27, 495, 10, 10);
  ellipse(20, 490, 10, 10);
  fill('red');
  ellipse(20, 480, 10, 10);
  ellipse(0, 495, 10, 10);
  fill('blue');
  ellipse(20, 490, 10, 10);
  ellipse(0, 490, 10, 10);
  fill('red');
  ellipse(5, 485, 10, 10);
  ellipse(5, 495, 10, 10);
  fill('blue');
  ellipse(25, 480, 10, 10);
  ellipse(5, 500, 10, 10);
  fill('red');
  ellipse(25, 485, 10, 10);
  ellipse(10, 500, 10, 10);
  fill('blue');
  ellipse(10, 480, 10, 10);
  ellipse(12, 490, 10, 10);
  ////bentuk molekul carbon bawah + orbitnya
  fill('blue');
  ellipse(1110, 1033, 5, 5);
  ellipse(1115, 1028, 5, 5);
  fill('red');
  ellipse(1118, 1038, 5, 5);
  ellipse(1110, 1028, 5, 5);
  fill('blue');
  ellipse(1110, 1035, 5, 5);
  ellipse(1115, 1035, 5, 5);
  fill('red');
  ellipse(1115, 1033, 5, 5);
  ellipse(1115, 1028, 5, 5);
  fill('blue');
  ellipse(1115, 1030, 5, 5);
  ellipse(1105, 1030, 5, 5);
  fill('red');
  ellipse(1115, 1035, 5, 5);
  ellipse(1110, 1033, 5, 5);
  fill('blue');
  ellipse(1110, 1030, 5, 5);
  ellipse(1112, 1035, 5, 5);
  fill('red');
  ellipse(1110, 1030, 5, 5);
  ellipse(1115, 1033, 5, 5);
  ////orbit
  fill('black');
  noFill();
  ellipse(1110, 1030, 55, 55);
  ellipse(1110, 1030, 105, 105);
  ////proton
  fill('red');
  noStroke();
  ellipse(1163, 1030, 10, 10);
  ellipse(1058, 1030, 10, 10);
  ellipse(1135, 1030, 10, 10);
  ellipse(1084, 1030, 10, 10);
  ellipse(1110, 977, 10, 10);
  ellipse(1110, 1081, 10, 10);
  ////Tampilan footer
  fill('grey');
  noStroke();
  rect(0, 1390, 1249, 400);
  //Judul
  fill('black');
  textSize(46);
  text("Carbon Dating", 100, 55);
  fill('orange');
  textSize(10);
  text("Simulasi Komputasi dan Matematika Tahun 2023", 135, 70);
  //Interpretasi
  fill('black');
  textSize(16);
  text("Dalam bidang arkeologi, menentukan usia benda purba merupakan salah satu kegiatan yang sangat penting. Namun seringkali sangat sulit dilakukan.Salah satu cara ", 50, 150);
  text("dalam penentuan usia benda purba (fosil) yaitu dengan Penanggalan Radiocarbon, yaitu metode penentuan usia benda bersejarah berdasarkan peluruhan carbon-14.", 50, 170);
  text("metode tersebut pertama kali dikembangkan oleh Willard F. Libby bekerjasama dengan James Arnold dan Ernest C. di Institute Nuclear Studies, California University", 50, 190);
  text("(1940).", 50, 210)
  text("Yuliati,Helfi; Akhadi, Muklis. 2005.“Radionuklida Kosmogenik untuk Penanggalan”. Metode radiocarbon bermanfaat dalam menentukan usia suatu objek (misalnya fosil) ", 50, 235);
  text("yang bergantung pada peluruhan radiocarbon menjadi nitrogen melalui proses peluruhan atau radioactive decay. Laju peluruhan (R) atau dapat juga ditulis dengan dN/dt.", 50, 255);
  text("N(t) merupakan banyaknya atom pada waktu ke-t, sehingga laju peluruhan zat radioaktif dapat dituliskan :", 50, 275);
  text("R = dN/dt = -N/tao....(1) ;  tao = konstanta peluruhan", 50, 295);
  text("pengintegrasian menggunakan variabel terpisah diperoleh persamaan analitis berikut :", 50, 325);
  text("N(t) = N(0). e^(-t/tao)....(2) ;  N(0) =  jumlah inti saat t=0", 50, 345);
  text("persamaan analitis diatas bisa dikembangkan dengan menggunakan kondisi waktu paro(peluruhan inti bersisa separuh), T paro = 5730 tahun.", 50, 375);
  text("Persamaan (1) dapat ditulis kembali seperti berikut.", 50, 395);
  text("dN/dt = N.ln2/T paro", 50, 415);
  text("diperoleh dari hubungan T paro = tao.ln2 atau tao = T paro/ln2 berdasarkan persamaan (2).", 50, 430);
  //Grafik
  fill('orange');
  textSize (24);
  text("Grafik hasil perhitungan 'Carbon Dating'. ", 50, 470);
  fill('black');
  textSize(16);
  text("Berikut adalah grafik dari carbon dating yang dihitung dengan variasi sisa carbon. Dalam percobaan ini variasi sisa carbon yang digunakan yaitu :", 50, 495);
  text("0.001; 0.1; 0.25; 0.5; 0.75; 0.99.", 50, 515);
  //Grafik SisaCarbon_0.0001 : 76139_Tahun
  image(satu, 20, 550, 250, 250);
  fill('black');
  textSize (12);
  text ("SisaCarbon_0.0001 : 76139_Tahun", 20, 815);
  //Grafik SisaCarbon_0.1 : 19035_Tahun
  image(tiga, 300, 550, 250, 250);
  fill('black');
  textSize (12);
  text ("SisaCarbon_0.1 : 19035_Tahun", 300, 815);
  //Grafik SisaCarbon_0.25 : 11460_Tahun
  image(lima, 580, 550, 250, 250);
  fill('black');
  textSize (12);
  text ("SisaCarbon_0.25 : 11460_Tahun", 580, 815);
  //Grafik SisaCarbon_0.5 : 5730Tahun
  image(delapan, 20, 830, 250, 250);
  fill('black');
  textSize (12);
  text ("SisaCarbon_0.5 : 5730Tahun", 20, 1095);
  //Grafik SisaCarbon_0.75 : 2378Tahun
  image(sebelas, 300, 830, 250, 250);
  fill('black');
  textSize (12);
  text ("SisaCarbon_0.75 : 2378Tahun", 300, 1095);
  //Grafik SisaCarbon_0.99 : 83Tahun
  image(empatbelas, 580, 830, 250, 250);
  fill('black');
  textSize (12);
  text ("SisaCarbon_0.99 : 83Tahun", 580, 1095);
  //Closing
  fill('black');
  textSize(16);
  text("Perhitungan usia benda purba (fosil) dapat ditentukan dengan cara 'Carbon Dating'. Kemudian dapat diinterpretasikan hubungan antara persentase kuantitas carbon-14", 50, 1150);
  text("dengan waktu paro (5730 Tahun).", 50, 1170);
  text("Berikut lampiran berupa link web untuk mendapatkan grafik yang diinginkan (dengan input-an : nilai awal, sisa carbon, konstanta peluruhan, serta rentang waktu grafik)", 50, 1200);
  text("Link Google Collaboratory :", 50, 1220);
  textSize (12);
  text("*Klik/Salin link/Klik lalu drag pada tempat UR", 50, 1250);
  textSize (16);
  text("Link Github :", 50, 1270);
  textSize (12);
  text("*Klik/Salin link/Klik lalu drag pada tempat UR", 50, 1300);
  //Kesimpulan
  fill('orange');
  textSize (24);
  text ("Kesimpulan", 900, 575);
  fill('black');
  textSize (16);
  text ("Berdasarkan grafik dapat disimpulkan bahwa ", 900, 620);
  text ("semakin sedikit sisa carbon maka usia benda", 900, 640);
  text("purba tersebut semakin tua. Jika dilihat dari", 900, 660);
  text("bentuk grafik, garisnya akan semakin", 900, 680);
  text("melengkung kebawah (negatif eksponen).", 900,700);
  text("Bentuk grafik tersebut terjadi karena", 900, 720);
  text("pengaruh waktu paro (5730 Tahun).", 900, 740);
  text("Artinya, setiap 5730 tahun sisa carbon akan", 900, 760);
  text("berjumlah setengah dari nilai awal carbon.", 900, 780);
  //Bibliography
  fill('orange');
  textSize (24);
  text ("Daftar Pustaka", 900, 850);
  fill('black');
  textSize (12);
  text("*Klik/Salin link/Klik lalu drag pada tempat URL", 900, 940);
  text("*Klik/Salin link/Klik lalu drag pada tempat URL", 900, 970);
  //Footer
  textSize (18);
  fill('white');
  text("Program Studi Matematika, ITERA.", 30, 1410);
  textSize (14);
  text("Jl Terusan Ryacudu Way Huwi,", 30, 1430);
  text("Kecamatan Jati Agung", 30, 1450);
  text("Kabupaten Lampung Selatan,", 30, 1470);
  text("Lampung. 35365.", 30, 1490);
  textSize (12);
  text ("Kelompok B :",375, 1410);
  text("Gaizka Hisham Mustofa_119160058 | Callista Wynona Claudea_119160078 | Iqlima Dita Azzahra_121160024 | ", 375, 1430);
  text("Agnes Putri Delima Manik_121160031 | Visna Mutiara Rahma_121160046 | Intan Permatasari Harahap_121160083 | ", 375, 1450)
  text("Rika Kristiani_121160093 | Banua Asi Pardamean Tamba_121160112", 375, 1470);
  text("email : matematika@itera.ac.id          web : ma.itera.ac.id          IG : @mathitera", 375, 1490)
  
}