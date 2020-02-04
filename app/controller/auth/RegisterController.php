<?php


namespace App\Controller\Auth;

use App\Perdoruesi;
use App\Controller\BaseController;

class RegisterController extends BaseController
{
    public function register($request)
    {
        $this->validate($request,['emri','mbiemri','email','fjalkalimi']);
        $user = new Perdoruesi;
        $user->emri = $request->emri;
        $user->mbiemri = $request->mbiemri;
        $user->email = $request->email;
        $user->fjalkalimi = password_hash($request->fjalkalimi,PASSWORD_DEFAULT);
        $user->save();

        return LoginController::login($request);
    }
}
