// Admin giriş bilgileri
const adminUsername = "admin";
const adminPassword = "12345";

// Admin giriş fonksiyonu
function adminLogin() {
    const username = document.getElementById("adminUser").value;
    const password = document.getElementById("adminPass").value;

    if (username === adminUsername && password === adminPassword) {
        alert("Admin girişi başarılı!");
        window.location.href = "admin.html";
    } else {
        alert("Admin bilgileri yanlış!");
    }
}

// Öğrenci silme
function deleteStudent(schoolNo) {
    localStorage.removeItem(schoolNo);
    alert("Öğrenci silindi!");
    location.reload();
}

// Tüm öğrencileri listele
function loadStudents() {
    const studentList = document.getElementById("studentList");

    if (!studentList) return;

    studentList.innerHTML = "";

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (
            key !== "currentUser" &&
            key !== "adminUser" &&
            key !== "adminPass"
        ) {
            const user = JSON.parse(localStorage.getItem(key));

            if (user && user.name) {
                studentList.innerHTML += `
                    <div style="background:#40414f; padding:15px; margin:10px 0; border-radius:10px;">
                        <img src="${user.photo}" style="width:70px; border-radius:10px;">
                        <p><strong>${user.name}</strong></p>
                        <p>No: ${user.schoolNo}</p>
                        <p>Sınıf: ${user.className}</p>
                        <button onclick="deleteStudent('${user.schoolNo}')">Sil</button>
                    </div>
                `;
            }
        }
    }
}

// Sayfa açıldığında otomatik yükle
window.onload = function() {
    loadStudents();
};