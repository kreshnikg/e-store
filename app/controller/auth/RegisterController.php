<?php


namespace App\Controller\Auth;

use App\Perdoruesi;

class RegisterController
{
    public static function register($request)
    {
        $data = json_decode($request);
        $user = new Perdoruesi;
        $user->emri = $data->emri;
        $user->mbiemri = $data->mbiemri;
        $user->email = $data->email;
        $user->fjalkalimi = password_hash($data->fjalkalimi,PASSWORD_DEFAULT);
        $user->save();

        return LoginController::login($request);
    }
}
