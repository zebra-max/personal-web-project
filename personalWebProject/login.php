<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1. Giriş verilerini al ve temizle
    $email = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
    $password = trim($_POST['password'] ?? '');

    // 2. Boş alan kontrolü
    if (empty($email) || empty($password)) {
        header("Location: login.html?error=empty_fields");
        exit;
    }

    // 3. Email format kontrolü (b+10 rakam + @sakarya.edu.tr)
    if (!preg_match('/^b\d{10}@sakarya\.edu\.tr$/', $email)) {
        header("Location: login.html?error=invalid_email");
        exit;
    }

    // 4. Öğrenci numarasını çıkar (b1812100001)
    $student_id = substr($email, 0, 11);

    // 5. Şifre kontrolü (şifre = öğrenci numarası)
    if ($password === $student_id) {
        // BAŞARILI GİRİŞ
        echo <<<HTML
        <!DOCTYPE html>
        <html lang="tr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Giriş Başarılı</title>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
          
            <!-- 5 saniye sonra ana sayfaya yönlendir -->
            <meta http-equiv="refresh" content="5;url=index.html">
        </head>
        <body>
            <div class="success-box">
                <h2>Giriş Başarılı!</h2>
                <p>Hoşgeldiniz <span class="student-id">$student_id</span></p>
                <p>5 saniye sonra yönlendirileceksiniz...</p>
            </div>
        </body>
        </html>
        HTML;
    } else {
        // HATALI ŞİFRE
        header("Location: login.html?error=invalid_credentials");
        exit;
    }
} else {
    // DOĞRUDAN ERİŞİM ENGELLENDİ
    header("Location: login.html");
    exit;
}
?>