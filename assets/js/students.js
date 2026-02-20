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

// Ogrenci Array'ini Baslangic Data'siyla Olusturuyoruz
let students = [...initialStudents];

// Hoisting Yaparak Uygulamayi Calistiracak Fonksiyonu Cagiriyoruz
init();

// Sayfa Acildiginda Students Array Icindeki Ogrencileri listeleliyoruz
function init() {
  studentsList(students);
}

function reset() {
  searchInput.value = "";
  studentsList(students);
}

/* Ogrenci Ekleme Butonuna Tiklandiktan Sonra
Girilen Bilgileri Mevcut Bilgilerle Birlestirip Yazdiriyoruz */
function studentsList(list) {

  let tbody = document.querySelector("#allStudentInformations")
  tbody.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    tbody.innerHTML += `
      <tr>
        <td>${list[i].firstName}</td>
        <td>${list[i].lastName}</td>
        <td>${list[i].age}</td>
        <td>${list[i].gender}</td>
        <td><img src="${list[i].photo}" alt=""></td>
        <td><button onclick="studentDelete(${i})">Sil</button></td>
        <td><button onclick="studentUpdate(${i})">Düzenle</button></td>
      </tr>`;
    console.log(`Öğrenci Adı : ${list[i].firstName} Öğrenci Soyadı : ${list[i].lastName} Öğrenci Yaşı : ${list[i].age} Öğrenci Cinyeti : ${list[i].gender} Öğrenci Fotoğrafı : ${list[i].photo}`);
  }
}

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

  studentsList(students);

  console.log(`Eklenen Öğrencinin Adı : ${newStudent.firstName} Eklenen Öğrencinin Soyadı : ${newStudent.lastName} Eklenen Öğrencinin Yaşı : ${newStudent.age} Eklenen Öğrencinin Cinsiyeti : ${newStudent.gender} Eklenen Öğrencinin Fotoğrafı : ${newStudent.photo}`);
}

function studentDelete(index) {
  // Kullanicidan Onay Istiyoruz
  if (confirm("Bu öğrenciyi silmek istediğinizden emin misiniz?")) {

    // students Array Icinden Silme Islemini Yapiyoruz
    students.splice(index, 1);

    // HTML'den Satiri Siliyoruz
    // row.remove();

    studentsList(students);

    alert("Öğrenci Silindi");
  }
}

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

      studentsList(students);
      alert("Öğrencinin Bilgileri Güncellendi");
    }
  }
}