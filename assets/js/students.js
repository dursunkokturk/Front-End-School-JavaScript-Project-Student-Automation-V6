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

// Sayfa Acildiginda Students Array Icindeki Ogrencileri listeleliyoruz
window.onload = function () {
  studentsList();
};

/* Ogrenci Ekleme Butonuna Tiklandiktan Sonra
Girilen Bilgileri Mevcut Bilgilerle Birlestirip Yazdiriyoruz */
function studentsList() {

  addstudentInformations.innerHTML = "";

  for (const student of students) {
    addstudentInformations.innerHTML += `
      <tr>
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.age}</td>
        <td>${student.gender}</td>
        <td>${student.photo}</td>
        <td><button onclick="studentDelete(this)">Sil</button></td>
        <td><button onclick="studentUpdate(this)">Düzenle</button></td>
      </tr>`;
    console.log(`Öğrenci Adı : ${student.firstName} Öğrenci Soyadı : ${student.lastName} Öğrenci Yaşı : ${student.age} Öğrenci Cinyeti : ${student.gender} Öğrenci Fotoğrafı : ${student.photo}`);
  }
}

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

  // studentsList();

  addstudentInformations.innerHTML += `
  <tr>
    <td>${newStudent.firstName}</td>
    <td>${newStudent.lastName}</td>
    <td>${newStudent.age}</td>
    <td>${newStudent.gender}</td>
    <td>${newStudent.photo}</td>
    <td><button onclick="studentDelete(this)">Sil</button></td>
    <td><button onclick="studentUpdate(this)">Düzenle</button></td>
  </tr>`;

  console.log(`Eklenen Öğrencinin Adı : ${newStudent.firstName} Eklenen Öğrencinin Soyadı : ${newStudent.lastName} Eklenen Öğrencinin Yaşı : ${newStudent.age} Eklenen Öğrencinin Cinsiyeti : ${newStudent.gender} Eklenen Öğrencinin Fotoğrafı : ${newStudent.photo}`);
}

function studentDelete(button) {
  // Kullanicidan Onay Istiyoruz
  if (confirm("Bu öğrenciyi silmek istediğinizden emin misiniz?")) {
    // Butona Tiklandiginda Tiklanan Satiri Buluyoruz
    let row = button.parentElement.parentElement;

    // Tiklanan Satira Karsilik Gelen index'i Degerini Buluyoruz
    let rowIndex = row.rowIndex - 1;

    // students Array Icinden Silme Islemini Yapiyoruz
    students.splice(rowIndex, 1);

    // HTML'den Satiri Siliyoruz
    row.remove();

    alert("Öğrenci Silindi");
  }
}

function studentUpdate(button) {
  if (confirm("Bu Öğrencinin Bilgilerini Düzenlemek İstiyor Musunuz?")) {
    let row = button.parentElement.parentElement;
    let rowIndex = row.rowIndex - 1;

    // Update Islemi Icin Tiklanilan Ogrenci Bilgisinin Index Numarasi Uzerinden
    // Ogrencinin Array Icindeki Data'larina Ulasiyoruz
    let student = students[rowIndex];

    let newFirstName = prompt('Yeni İsmi Giriniz:');
    let newLastName = prompt('Yeni Soyismi Giriniz:');
    let newAge = prompt('Yeni Yaşı Giriniz:');
    let newGender = prompt('Yeni Cinsiyeti Giriniz:');
    let newPhoto = prompt('Yeni Fotoğrafı giriniz:');

    // Eğer Kullanici Islemi Iptal Etmedi Ise Guncelle
    if (newFirstName && newLastName && newAge && newGender && newPhoto) {

      // Secilen Ogrencinin Bilgilerini Guncelliyoruz
      students[rowIndex] = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
        gender: newGender,
        photo: newPhoto
      };

      // Student Array Icinde Yapilan Guncelleme Islemini 
      // HTML'de Gorunur Hale Getiriyoruz
      row.cells[0].innerText = newFirstName;
      row.cells[1].innerText = newLastName;
      row.cells[2].innerText = newAge;
      row.cells[3].innerText = newGender;
      row.cells[4].innerText = newPhoto;

      alert("Öğrencinin Bilgileri Güncellendi");
    }
  }
}

function studentSearch(){

  /* Ara Butonuna Tiklandiginda
    input Elementi Icindeki Degere Ulasiyoruz */
  let searchedName = studentName.value.toLowerCase();
  console.log(searchedName);

  for(let i=0; i<students.length;i++){

    if(searchedName === students[i].firstName.toLowerCase()){
      addstudentInformations.innerHTML += `
        <tr>
          <td>${students[i].firstName}</td>
          <td>${students[i].lastName}</td>
          <td>${students[i].age}</td>
          <td>${students[i].gender}</td>
          <td>${students[i].photo}</td>
          <td><button onclick="studentDelete(this)">Sil</button></td>
          <td><button onclick="studentUpdate(this)">Düzenle</button></td>
        </tr>`;
    }
  }
}