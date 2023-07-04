<?php

namespace App\Services;


use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserService
{
    /**
     * Отправка письма с логином и паролем для автоматически созданного пользователя
     * @param $email
     * @param $password
     * @return bool
     */
    public function sendUserLoginData($email, $password): bool
    {
        $subject = "Авторизационные данные";

        $message = ' <h5>Ваши данные авторизации на нашем сайте:</h5> </br>
                    <b>логин:  ' . $email . '</b> </br>
                    <b>пароль:  ' . $password . '</b> </br>';

        $headers  = "Content-type: text/html; charset=windows-1251 \r\n";
        $headers .= "From: От кого письмо 'Интернет-магазин одежды' - abdurahmanramazanov0111@gmail.com \r\n";
        $headers .= "Reply-To: reply-to@example.com\r\n";

        if (mail($email, $subject, $message, $headers)) {
            return true;
        }

        return false;
    }

}
