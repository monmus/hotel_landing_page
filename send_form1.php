



<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $secretKey = '6LcZ9gUqAAAAAJjw7V0X4bScnxvjMdXf7Mbrc_v-';
    $captcha = $_POST['g-recaptcha-response'];

    if (!$captcha) {
        echo 'Proszę zaznaczyć reCAPTCHA.';
        exit;
    }

    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$captcha");
    $responseKeys = json_decode($response, true);

    if (intval($responseKeys["success"]) !== 1) {
        echo 'Weryfikacja reCAPTCHA nie powiodła się. Spróbuj ponownie.';
    // console.log('dupa')
    } else {
        $name = htmlspecialchars($_POST['name']);
        $email = htmlspecialchars($_POST['email']);
        $phone = htmlspecialchars($_POST['phone']);
        $message = htmlspecialchars($_POST['message']);

        // Przykład wysyłania e-maila
        $to = "monikmusial@gmail.com";
        $subject = "Wiadomość z formularza kontaktowego od: $name";
        $headers = "From: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        $email_message = "Imię: $name\n";
        $email_message .= "Email: $email\n\n";
        $email_message .= "Phone: $phone\n\n";
        $email_message .= "Wiadomość:\n$message\n";

        if (mail($to, $subject, $email_message, $headers)) {
            echo 'Dziękujemy za kontakt!';
            // $json=array("status"=>1,"msg"=>"<p class='status_ok'>Twój formularz został pomyślnie wysłany.</p>");

        } else {
            echo 'Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.';
        }
    }
}
// echo json_encode($json);
?>