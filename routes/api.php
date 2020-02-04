<?php

use App\Controller\PerdoruesiController;
use App\Controller\ProduktiController;
use App\Controller\Auth\LoginController;
use App\Controller\Auth\RegisterController;

function switchRoute($request,$method,$data = null){

    $perdoruesi = new PerdoruesiController;
    $produkti = new ProduktiController;
    $login = new LoginController;
    $register = new RegisterController;

    if(!isset($request) || !isset($method))
        die("Error");

    if($method == 'POST') {
        if($data == null)
            die("Error");
        $dataJson = json_decode($data);
        switch ($request) {
            case '/api/users' :
                echo $perdoruesi->store($dataJson);
                break;
            case '/api/products' :
                echo $produkti->store($dataJson);
                break;
            case '/api/login' :
                echo $login->login($dataJson);
                break;
            case '/api/register' :
                echo $register->register($dataJson);
                break;
            default:
                die('Not found!');
                break;
        }
    } else {
        $requestArray = explode('/',$request);
        $id = isset($requestArray[3]) ? $requestArray[3] : null;
        switch ($request) {
            case '/api/users' :
                echo $perdoruesi->index();
                break;
            case (fnmatch('/api/users/*',$request) ? true : false) :
                echo $perdoruesi->show($id);
                break;
            case (fnmatch('/api/products/*',$request) ? true : false) :
                echo $produkti->show($id);
                break;
            case (fnmatch('/api/products*',$request) ? true : false) :
                echo $produkti->index();
                break;
            case '/api/logout' :
                echo $login->logout();
                break;
            default:
                die('Not found!');
                break;
        }
    }
}
