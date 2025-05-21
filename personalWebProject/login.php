<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = trim($_POST['email'] ?? '');
    $password = trim($_POST['password'] ?? '');

    if (empty($email) || empty($password)) {
        header("Location: login.html");
        exit;
    }

    if (!preg_match('/^(b\d{10})@sakarya\.edu\.tr$/', $email, $matches)) {
        header("Location: login.html");
        exit;
    }

    $user_id = $matches[1];

    if ($password === $user_id) {
        echo "<!DOCTYPE html>
        <html lang='tr'>
        <head>
            <meta charset='UTF-8'>
            <title>Giriş Başarılı</title>
            <link rel='stylesheet' href='css/login-success.css'>
        </head>
        <body>
            <div class='success-box'>
                <h2>Hoşgeldiniz <span>$user_id</span></h2>
                <p>Giriş işleminiz başarıyla gerçekleşti.</p>
            </div>
        </body>
        </html>";
    } else {
        header("Location: login.html");
        exit;
    }
} else {
    header("Location: login.html");
    exit;
}
?>
