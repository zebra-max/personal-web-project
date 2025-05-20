<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);




if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);

    // Boş alan kontrolü
    if (empty($email) || empty($password)) {
        header("Location: login.html");
        exit();
    }

    // E-posta geçerliliği ve domain kontrolü
    if (!filter_var($email, FILTER_VALIDATE_EMAIL) || substr($email, -strlen("@sakarya.edu.tr")) !== "@sakarya.edu.tr") {
        header("Location: login.html");
        exit();
    }

    // E-posta'dan kullanıcı adı (b18...) kısmını al
    $username = explode('@', $email)[0];
    $expectedPassword = $username; // Şifre, domain'siz hali

    if ($password === $expectedPassword) {
        echo "<h2 style='text-align:center;'>Hoşgeldiniz $username</h2>";
    } else {
        header("Location: login.html");
        exit();
    }
} //else {
   // header("Location: login.html");
    //exit();
//}

?>
