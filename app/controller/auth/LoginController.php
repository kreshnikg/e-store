<?php

namespace App\Controller\Auth;

use App\controller\BaseController;
use App\Perdoruesi;

class LoginController extends BaseController
{
    public static function login($request)
    {
        self::validate($request,['email','fjalkalimi']);
        $data = json_decode($request);
        $userData = Perdoruesi::where('email', '=', $data->email)->get();
        $success = true;
        if(count($userData) == 1) {
            $user = $userData[0];
            if (password_verify($data->fjalkalimi, $user->fjalkalimi)) {
                $_SESSION["logged_in"] = true;
                setcookie("user", json_encode(["emri" => $user->emri,"mbiemri" => $user->mbiemri]),time()+3600,"/");
            } else {
                $success = false;
            }
        } else {
            $success = false;
        }
        if($success){
            return "success";
        } else {
            echo "Email ose fjalkalimi është gabim.";
            die(http_response_code(422));
        }
    }

    public static function logout()
    {
        session_destroy();
        setcookie("user", "", time()-3600);
        return "success";
    }
}
