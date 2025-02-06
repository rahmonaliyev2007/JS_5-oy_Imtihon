const
    left = document.querySelector('.left'),
    main = document.querySelector('main'),
    navToggle = document.getElementById('navToggle'),
    navTitle = document.getElementById('navTitle'),
    addToggle = document.getElementById('addBtn'),
    addClose = document.getElementById('add_Close'),
    editClose = document.getElementById('edit_Close'),
    overlay = document.querySelector('.overlay'),
    addBox = document.querySelector('.add'),
    addStudent = document.getElementById('addStudent'),
    addForm = document.getElementById('addForm'),
    editForm = document.getElementById('editForm'),
    showlist = document.getElementById('showList'),
    editBox = document.querySelector('.edit'),
    filterBtn = document.querySelector('.filter')
    ;

let js12Students = JSON.parse(localStorage.getItem('js12Students')) || [];
let editStudentId = 0;
// let seeStudent = JSON.parse(localStorage.getItem('student'));
// show student start =========
function showStudent() {
    showlist.innerHTML = '';
    js12Students.forEach((student, index) => {
        showlist.innerHTML += `
        <li>
          <img src="${student.photo}" alt="User Image">
          <div class="name">${student.name}</div>
          <div class="email">${student.email}</div>
          <div class="phone">${student.phone}</div>
          <div class="enroll">${student.enroll}</div>
          <div class="date">${student.time}</div>
          <div class="action">
            <button class="edit" onclick="editStudent(${index})" ><i class="bi bi-pen"></i></button>
            <button class="delete" onclick="deleteStudent(${index})"><i class="bi bi-trash3"></i></button>
          </div>
          <div class="li_Overlay" onclick="seeStudentFC(${index})"></div>
        </li>
        `
    });

}
showStudent();
// add student start ===========
addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (addStudentCheckFC()) {
        addStudentFC();
        addReset();
        showStudent();
        addCloseFC();
        addForm.reset();
    }
    else {
        console.log(`yaxshi emas`);
    }

});

function addStudentFC() {
    const name = document.getElementById('add_Name').value;
    const photo = document.getElementById('add_Photo').value;
    const phone = document.getElementById('add_Phone').value;
    const email = document.getElementById('add_Email').value;
    const enroll = document.getElementById('add_Enroll').value;

    js12Students.push({
        name: name,
        photo: photo,
        phone: phone,
        email: email,
        enroll: enroll,
        time: timeFC()
    });
    localStorage.setItem('js12Students', JSON.stringify(js12Students));
}

// add student end =============

// add student check ===========
function addStudentCheckFC() {
    const name = document.getElementById('add_Name');
    const photo = document.getElementById('add_Photo');
    const phone = document.getElementById('add_Phone');
    const email = document.getElementById('add_Email');
    const enroll = document.getElementById('add_Enroll');
    const nameError = document.querySelector('.add_Name_error');
    const photoError = document.querySelector('.add_Photo_error');
    const emailError = document.querySelector('.add_Email_error');
    const phoneError = document.querySelector('.add_Phone_error');
    const enrollError = document.querySelector('.add_Enroll_error');

    let isValid = true;

    [name, photo, phone, email, enroll].forEach((input) => {
        const errorEl = document.querySelector(`.add_${input.id.split('_')[1]}_error`);
        if (input.value.trim() === "") {
            isValid = false;
            errorEl.style.top = '0';
            input.style.borderColor = 'red';
        } else {
            errorEl.style.top = '-20px';
            input.style.borderColor = 'rgba(229, 229, 229, 1)';
        }
    });
    return isValid;
}
function editStudentCheckFC() {
    const name = document.getElementById('edit_Name');
    const photo = document.getElementById('edit_Photo');
    const phone = document.getElementById('edit_Phone');
    const email = document.getElementById('edit_Email');
    const enroll = document.getElementById('edit_Enroll');
    const nameError = document.querySelector('.edit_Name_error');
    const photoError = document.querySelector('.edit_Photo_error');
    const emailError = document.querySelector('.edit_Email_error');
    const phoneError = document.querySelector('.edit_Phone_error');
    const enrollError = document.querySelector('.edit_Enroll_error');

    let isValid = true;

    [name, photo, phone, email, enroll].forEach((input) => {
        const errorEl = document.querySelector(`.edit_${input.id.split('_')[1]}_error`);
        if (input.value.trim() === "") {
            isValid = false;
            errorEl.style.top = '0';
            input.style.borderColor = 'red';
        } else {
            errorEl.style.top = '-20px';
            input.style.borderColor = 'rgba(229, 229, 229, 1)';
        }
    });
    return isValid;
}
// add student check end =====

// delete student end =============
function deleteStudent(id) {
    js12Students = js12Students.filter((item, i) => i !== id);
    localStorage.setItem('js12Students', JSON.stringify(js12Students));
    showStudent();
};
// add reset start ========

function addReset() {
    const name = document.getElementById('add_Name');
    const photo = document.getElementById('add_Photo');
    const phone = document.getElementById('add_Phone');
    const email = document.getElementById('add_Email');
    const enroll = document.getElementById('add_Enroll');
    const nameError = document.querySelector('.add_Name_error');
    const photoError = document.querySelector('.add_Photo_error');
    const emailError = document.querySelector('.add_Email_error');
    const phoneError = document.querySelector('.add_Phone_error');
    const enrollError = document.querySelector('.add_Enroll_error');

    nameError.style.top = '-20px';
    photoError.style.top = '-20px';
    emailError.style.top = '-20px';
    phoneError.style.top = '-20px';
    enrollError.style.top = '-20px';
    name.style.borderColor = 'rgba(229, 229, 229, 1)';
    photo.style.borderColor = 'rgba(229, 229, 229, 1)';
    email.style.borderColor = 'rgba(229, 229, 229, 1)';
    phone.style.borderColor = 'rgba(229, 229, 229, 1)';
    enroll.style.borderColor = 'rgba(229, 229, 229, 1)';
}
function editReset() {
    const name = document.getElementById('add_Name');
    const photo = document.getElementById('add_Photo');
    const phone = document.getElementById('add_Phone');
    const email = document.getElementById('add_Email');
    const enroll = document.getElementById('add_Enroll');
    const nameError = document.querySelector('.add_Name_error');
    const photoError = document.querySelector('.add_Photo_error');
    const emailError = document.querySelector('.add_Email_error');
    const phoneError = document.querySelector('.add_Phone_error');
    const enrollError = document.querySelector('.add_Enroll_error');

    nameError.style.top = '-20px';
    photoError.style.top = '-20px';
    emailError.style.top = '-20px';
    phoneError.style.top = '-20px';
    enrollError.style.top = '-20px';
    name.style.borderColor = 'rgba(229, 229, 229, 1)';
    photo.style.borderColor = 'rgba(229, 229, 229, 1)';
    email.style.borderColor = 'rgba(229, 229, 229, 1)';
    phone.style.borderColor = 'rgba(229, 229, 229, 1)';
    enroll.style.borderColor = 'rgba(229, 229, 229, 1)';
}
// add reset end ===========

// nav toggle start ===========
navToggle.addEventListener('click', () => {

    if (left.style.left == '-270px') {
        setTimeout(() => {
            left.style.left = '0px';
            main.style.width = 'calc(100% - 270px)';
            navToggle.style.transform = 'rotate(0deg)';
        }, 100)
        navTitle.style.transform = 'translate(0, -45px)';
    } else {
        left.style.left = '-270px';
        main.style.width = '100%';
        navToggle.style.transform = 'rotate(180deg)';
        setTimeout(() => {
            navTitle.style.transform = 'translate(0, 0)';
        }, 200)
    }
});
// nav toggle end =============
// add toggle start ===========
addToggle.addEventListener('click', () => {
    addBox.style.right = '0';
    overlay.style.display = 'block';
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.opacity = '1';
    }, 1);
});

function addCloseFC() {
    addBox.style.right = '-100%';
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 401);
    addReset();
}

addClose.addEventListener('click', addCloseFC);
editClose.addEventListener('click', editCloseFC)
overlay.addEventListener('click', () => {
    addCloseFC();
    editCloseFC();
});
// add toggle end =============

// edit toggle end =============

function editOpen() {
    editBox.style.right = '0';
    overlay.style.display = 'block';
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.opacity = '1';
    }, 1);
}

function editStudent(id) {
    editStudentId = id;
    editOpen();
    let student = js12Students[id]
    document.getElementById('edit_Name').value = student.name;
    document.getElementById('edit_Photo').value = student.photo;
    document.getElementById('edit_Email').value = student.email;
    document.getElementById('edit_Phone').value = student.phone;
    document.getElementById('edit_Enroll').value = student.enroll;
}

editForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (editStudentCheckFC()) {
        js12Students[editStudentId] = {
            name: document.getElementById('edit_Name').value,
            photo: document.getElementById('edit_Photo').value,
            email: document.getElementById('edit_Email').value,
            phone: document.getElementById('edit_Phone').value,
            enroll: document.getElementById('edit_Enroll').value,
            time: timeFC()
        }
        localStorage.setItem('js12Students', JSON.stringify(js12Students));
        editCloseFC();
        showStudent();
    }
});

function editCloseFC() {
    editBox.style.right = '-100%';
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 401);
    editReset();
}


// time start ==================
function timeFC() {
    const now = new Date();
    const date = now.getDate() < 10 ? '0' + (now.getDate() + 1) : now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();

    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];
    return `${date}-${months[month]}, ${year}`
}

function searchStudents() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const students = document.querySelectorAll('#showList li');
    students.forEach(studentCard => {
        studentName = studentCard.querySelector('.name').textContent.toLowerCase();
        studentEmail = studentCard.querySelector('.email').textContent.toLowerCase();
        if (studentName.includes(searchValue) || studentEmail.includes(searchValue)) {
            studentCard.style.display = 'flex';
        } else {
            studentCard.style.display = 'none';
        }
    });
}

const showList = document.getElementById('showList');

filterBtn.addEventListener('click', () => {
    const students = [...showList.querySelectorAll('li')];
    students.sort((a, b) => {
        const nameA = a.querySelector('.name').textContent.toLowerCase();
        const nameB = b.querySelector('.name').textContent.toLowerCase();
        return nameA.localeCompare(nameB);
    });

    students.forEach(student => showList.appendChild(student));
});

function seeStudentFC(id) {
    // localStorage'dan student ro'yxatini olish
    let seeStudent = JSON.parse(localStorage.getItem('student'));

    // Agar ro'yxat mavjud bo'lmasa, yangi ro'yxat yaratish
    if (!seeStudent) {
        seeStudent = [];
    }

    // Talaba ma'lumotlarini ro'yxatga qo'shish
    seeStudent.unshift({
        name: js12Students[id].name,
        email: js12Students[id].email,
        phone: js12Students[id].phone,
        enroll: js12Students[id].enroll,
        photo: js12Students[id].photo,
        time: js12Students[id].time,
    });

    // O'zgartirilgan ro'yxatni localStorage'ga saqlash
    localStorage.setItem('student', JSON.stringify(seeStudent));

    // Yangi sahifaga yo'naltirish
    window.location.href = 'seeStudent.html';
}