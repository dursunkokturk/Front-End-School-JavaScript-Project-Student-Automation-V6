const students = [
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

function studentsList(){
  for (const student of students){
    studentInformations.innerHTML += `
      <tr>
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.age}</td>
        <td>${student.gender}</td>
        <td>${student.photo}</td>
      </tr>`;
    console.log(`Öğrenci Adı : ${student.firstName} Öğrenci Soyadı : ${student.lastName} Öğrenci Yaşı : ${student.age} Öğrenci Cinyeti : ${student.gender} Öğrenci Fotoğrafı : ${student.photo}`);
  }
}

function studentAdd(){
  let newStudentFirstName = prompt("Eklenecek Öğrencinin Adını Giriniz");
  let newStudentLastName = prompt("Eklenecek Öğrencinin Soydını Giriniz");
  let newStudentAge = prompt("Eklenecek Öğrencinin Yaşını Giriniz");
  let newStudentGender = prompt("Eklenecek Öğrencinin Cinsiyetini Giriniz");
  let newStudentPhoto = prompt("Eklenecek Öğrencinin Fotoğrafını Giriniz");

  let newStudent = {
    firstName:newStudentFirstName,
    lastName:newStudentLastName,
    age:newStudentAge,
    gender:newStudentGender,
    photo:newStudentPhoto,
  }
  
  students.push(newStudent);
  
  console.log(`Eklenen Öğrencinin Adı : ${newStudent.firstName} Eklenen Öğrencinin Soyadı : ${newStudent.lastName} Eklenen Öğrencinin Yaşı : ${newStudent.age} Eklenen Öğrencinin Cinsiyeti : ${newStudent.gender} Eklenen Öğrencinin Fotoğrafı : ${newStudent.photo}`);
}

studentsList();
studentAdd();
studentsList();