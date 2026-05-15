document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Form verileri
    const name = document.getElementById("name").value;
    const schoolNo = document.getElementById("schoolNo").value;
    const className = document.getElementById("className").value;

    // Kullanıcı bilgisi
    const userData = {
        name: name,
        schoolNo: schoolNo,
        className: className,
        qrID: schoolNo
    };

    // LocalStorage kayıt
    localStorage.setItem(schoolNo, JSON.stringify(userData));

    // Önceki QR temizle
    document.getElementById("qrResult").innerHTML = "";

    // Yeni QR oluştur
    new QRCode(document.getElementById("qrResult"), {
        text: schoolNo,
        width: 200,
        height: 200,
        colorDark: "#10a37f",
        colorLight: "#ffffff"
    });

    alert("Kayıt başarılı! QR kod oluşturuldu.");
});