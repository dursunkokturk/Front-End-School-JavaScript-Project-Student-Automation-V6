const initialStudents = [
  {
    firstName: "Ahmet",
    lastName: "Yılmaz",
    age: 20,
    gender: "Erkek",
    photo: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    firstName: "Mehmet",
    lastName: "Kaya",
    age: 22,
    gender: "Erkek",
    photo: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    firstName: "Ayşe",
    lastName: "Demir",
    age: 19,
    gender: "Kadın",
    photo: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    firstName: "Fatma",
    lastName: "Çelik",
    age: 21,
    gender: "Kadın",
    photo: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    firstName: "Ali",
    lastName: "Şahin",
    age: 23,
    gender: "Erkek",
    photo: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    firstName: "Zeynep",
    lastName: "Koç",
    age: 20,
    gender: "Kadın",
    photo: "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    firstName: "Mustafa",
    lastName: "Arslan",
    age: 24,
    gender: "Erkek",
    photo: "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    firstName: "Elif",
    lastName: "Kurt",
    age: 18,
    gender: "Kadın",
    photo: "https://randomuser.me/api/portraits/women/8.jpg"
  },
  {
    firstName: "Emre",
    lastName: "Aydın",
    age: 21,
    gender: "Erkek",
    photo: "https://randomuser.me/api/portraits/men/9.jpg"
  },
  {
    firstName: "Merve",
    lastName: "Öztürk",
    age: 22,
    gender: "Kadın",
    photo: "https://randomuser.me/api/portraits/women/10.jpg"
  },
  {
    firstName: "Burak",
    lastName: "Polat",
    age: 19,
    gender: "Erkek",
    photo: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    firstName: "Ceren",
    lastName: "Aslan",
    age: 20,
    gender: "Kadın",
    photo: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    firstName: "Onur",
    lastName: "Güneş",
    age: 23,
    gender: "Erkek",
    photo: "https://randomuser.me/api/portraits/men/13.jpg"
  },
  {
    firstName: "Seda",
    lastName: "Yıldız",
    age: 21,
    gender: "Kadın",
    photo: "https://randomuser.me/api/portraits/women/14.jpg"
  },
  {
    firstName: "Kerem",
    lastName: "Erdoğan",
    age: 22,
    gender: "Erkek",
    photo: "https://randomuser.me/api/portraits/men/15.jpg"
  },
  {
    firstName: "Buse",
    lastName: "Kılıç",
    age: 19,
    gender: "Kadın",
    photo: "https://randomuser.me/api/portraits/women/16.jpg"
  },
  {
    firstName: "Tolga",
    lastName: "Aksoy",
    age: 24,
    gender: "Erkek",
    photo: "https://randomuser.me/api/portraits/men/17.jpg"
  },
  {
    firstName: "Derya",
    lastName: "Taş",
    age: 20,
    gender: "Kadın",
    photo: "https://randomuser.me/api/portraits/women/18.jpg"
  },
  {
    firstName: "Hakan",
    lastName: "Eren",
    age: 23,
    gender: "Erkek",
    photo: "https://randomuser.me/api/portraits/men/19.jpg"
  },
  {
    firstName: "Selin",
    lastName: "Yavuz",
    age: 18,
    gender: "Kadın",
    photo: "https://randomuser.me/api/portraits/women/20.jpg"
  }
];

/* ------------------- Uygulamayi Baslatma ------------------- */

// Ogrenci Array'ini Baslangic Data'siyla Olusturuyoruz
let students = [...initialStudents];

// Hoisting Yaparak Uygulamayi Calistiracak Fonksiyonu Cagiriyoruz
init();

// Sayfa Ilk Acildiginda localStorage Bos Ise
// initialStudents Verisini Oraya Yaziyoruz.
// Sonraki Acilislarda Ise Doğrudan localStorage'dan Okuyoruz.
// Bu Sayede Sayfa Yenilenince Veriler Kaybolmuyor.
// Bu Islemleri init Fonksiyonu Icinde Yapiyoruz

// Sayfa Acildiginda Students Array Icindeki Ogrencileri listeleliyoruz
function init() {
  // localStorage'da Data Yoksa
  // students Array'in Icindeki Data'lari JSON Objesine Cevirip
  // localStorage Uzerinden Baslangic Verisi Olarak Yazdiriyoruz
  if (!localStorage.students) {
    localStorage.students = JSON.stringify(students);
  }

  // Her Durumda students'i localStorage'dan Aliyoruz
  students = JSON.parse(localStorage.students);

  studentsList(students);
}

/* ------------------- Listeyi Sifirlama ------------------- */

function reset() {
  searchInput.value = "";
  studentsList(students);
}


/* ------------------- localStorage'in Guncel Halini Listeleme ------------------- */

/* Ogrenci Ekleme Butonuna Tiklandiktan Sonra
Girilen Bilgileri Mevcut Bilgilerle Birlestirip Yazdiriyoruz */
function studentsList(list) {

  let container = document.querySelector("#allStudentInformations")
  container.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    container.innerHTML += `
    
        <div class="student-card">
          <img src="${list[i].photo}" alt="">
          <div class="student-info">
            <strong>${list[i].firstName} ${list[i].lastName}</strong><br>
            Yaş : ${list[i].age} <br>
            Cinsiyet : ${list[i].gender}
          </div>
          <div class="student-buttons">
            <td><button onclick="studentDelete(${i})">Sil</button></td>
            <td><button onclick="studentUpdate(${i})">Düzenle</button></td>
          </div>
        </div>
      `;
    console.log(`Öğrenci Adı : ${list[i].firstName} Öğrenci Soyadı : ${list[i].lastName} Öğrenci Yaşı : ${list[i].age} Öğrenci Cinyeti : ${list[i].gender} Öğrenci Fotoğrafı : ${list[i].photo}`);
  }
}

/* ------------------- Kullanicidan Alinin Data'yi Arama ------------------- */

searchForm.addEventListener("submit", function (e) {

  // Tuşlara Her Basma Isleminde Sayfanın Yenilenmesini Engelliyoruz
  e.preventDefault();

  // Arama Isleminin Yapilacagi Alana Girilen Degerleri Aliyoruz
  let searchedValue = searchInput.value.toLowerCase().trim();

  // Arama Sonuclarinin Tutulacagi Bos Array Olusturuyoruz
  let filteredStudents = [];

  for (let i = 0; i < students.length; i++) {

    if (students[i].firstName.toLowerCase().indexOf(searchedValue) !== -1) {
      filteredStudents.push(students[i]);
    }
  }

  studentsList(filteredStudents);
});

/* ------------------- localStorage ve students Array'e Data Ekleme ve Listeleme ------------------- */

/* Ekleme Fonksiyonunu HTML Dosyasinda Bulunan Buton Uzerinden Cagiriyoruz */
function studentAdd() {
  let newStudentFirstName = prompt("Eklenecek Öğrencinin Adını Giriniz");
  let newStudentLastName = prompt("Eklenecek Öğrencinin Soydını Giriniz");
  let newStudentAge = Number(prompt("Eklenecek Öğrencinin Yaşını Giriniz"));
  let newStudentGender = prompt("Eklenecek Öğrencinin Cinsiyetini Giriniz");
  let newStudentPhoto = prompt("Eklenecek Öğrencinin Fotoğrafını Giriniz");

  let newStudent = {
    firstName: newStudentFirstName,
    lastName: newStudentLastName,
    age: newStudentAge,
    gender: newStudentGender,
    photo: newStudentPhoto,
  }

  students.push(newStudent);

  // students Array JavaScript objesi olduğu için
  // JSON.stringify() ile string'e Cevirip Kaydediyoruz,
  // Okurken de JSON.parse() ile Tekrar Objeye Ceviriyoruz.

  // Kullanicidan Alinan Data'yi
  // JSON Objesine Cevirip localStora'a Ekliyoruz
  // Ekleme Isleminden Sonra students Array'in Guncel Halini
  // localStorage'dan Aliyoruz
  localStorage.students = JSON.stringify(students);

  studentsList(students);

  console.log(`Eklenen Öğrencinin Adı : ${newStudent.firstName} Eklenen Öğrencinin Soyadı : ${newStudent.lastName} Eklenen Öğrencinin Yaşı : ${newStudent.age} Eklenen Öğrencinin Cinsiyeti : ${newStudent.gender} Eklenen Öğrencinin Fotoğrafı : ${newStudent.photo}`);
}

/* ------------------- localStorage ve students Array'den Data Silme ve Listeleme ------------------- */

function studentDelete(index) {
  // Kullanicidan Onay Istiyoruz
  if (confirm("Bu öğrenciyi silmek istediğinizden emin misiniz?")) {

    // students Array Icinden Silme Islemini Yapiyoruz
    students.splice(index, 1);

    // Silme Isleminden Sonra students Array'in Guncel Halini
    // localStorage'dan Aliyoruz
    localStorage.students = JSON.stringify(students);

    // HTML'den Satiri Siliyoruz
    // row.remove();

    studentsList(students);

    alert("Öğrenci Silindi");
  }
}

/* ------------------- localStorage ve students Array'de Data Guncelleme ve Listeleme ------------------- */

function studentUpdate(index) {
  if (confirm("Bu Öğrencinin Bilgilerini Düzenlemek İstiyor Musunuz?")) {
    let newFirstName = prompt('Yeni İsmi Giriniz:');
    let newLastName = prompt('Yeni Soyismi Giriniz:');
    let newAge = prompt('Yeni Yaşı Giriniz:');
    let newGender = prompt('Yeni Cinsiyeti Giriniz:');
    let newPhoto = prompt('Yeni Fotoğrafı giriniz:');

    // Eğer Kullanici Islemi Iptal Etmedi Ise Guncelle
    if (newFirstName && newLastName && newAge && newGender && newPhoto) {

      // Secilen Ogrencinin Bilgilerini Guncelliyoruz
      students[index] = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
        gender: newGender,
        photo: newPhoto
      };

      // Guncelleme Isleminden Sonra students Array'in Guncel Halini
      // localStorage'dan Aliyoruz
      localStorage.students = JSON.stringify(students);

      studentsList(students);
      alert("Öğrencinin Bilgileri Güncellendi");
    }
  }
}