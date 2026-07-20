<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Підключення PHPMailer
require 'PHPMailer-master/src/PHPMailer.php'; 
require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/SMTP.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'] ?? 'Не вказано';
    $topic = $_POST['topic'] ?? 'Без теми';
    $message = $_POST['message'];

    $mail = new PHPMailer(true);

    try {
        // Налаштування SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.ukr.net'; // SMTP сервер ukr.net
        $mail->SMTPAuth = true;
        $mail->Username = 'nepster1977@ukr.net'; // Ваша пошта
        $mail->Password = '7QGZc1PjxNoVhhZA'; // Ваш пароль
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Шифрування
        $mail->Port = 465; // Порт SMTP
        
        $mail->CharSet = 'UTF-8';
        $mail->Encoding = 'base64';
        
        // Від кого надсилається лист
        $mail->setFrom('nepster1977@ukr.net', $name);

        // Кому надсилається лист
        $mail->addAddress('nepster1977@ukr.net'); // Пошта отримувача

        // Тема листа
        $mail->Subject = $topic;

        // Тіло листа
        $mail->Body = "
        <b>Ім'я:</b> $name<br>
        <b>Email:</b> $email<br>
        <b>Телефон:</b> $phone<br>
        <b>Повідомлення:</b> $message
        ";
        $mail->AltBody = "
        Ім'я: $name\n
        Email: $email\n
        Телефон: $phone\n
        Повідомлення: $message
        ";

        // Надсилання листа
        $mail->send();
        echo 'Повідомлення успішно відправлено!';
    } catch (Exception $e) {
        echo "Помилка при відправленні листа: {$mail->ErrorInfo}";
    }
} else {
    echo 'Неправильний метод запиту.';
}
?>