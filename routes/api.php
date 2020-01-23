<?php

use App\Controller\PerdoruesiController;
use App\Controller\ProduktiController;
use App\Controller\Auth\LoginController;
use App\Controller\Auth\RegisterController;

function switchRoute($request,$method,$data = null){

    if(!isset($request) || !isset($method))
        die("Error");

    if($method == 'POST') {
        if($data == null)
            die("Error");

        switch ($request) {
            case '/api/users' :
                echo PerdoruesiController::store($data);
                break;
            case '/api/products' :
                echo ProduktiController::store($data);
                break;
            case '/api/login' :
                echo LoginController::login($data);
                break;
            case '/api/register' :
                echo RegisterController::register($data);
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
                echo PerdoruesiController::index();
                break;
            case (fnmatch('/api/users/*',$request) ? true : false) :
                echo PerdoruesiController::show($id);
                break;
            case '/api/products' :
                echo ProduktiController::index();
                break;
            case (fnmatch('/api/products/*',$request) ? true : false) :
                echo ProduktiController::show($id);
                break;
            case '/api/logout' :
                echo LoginController::logout();
                break;
            default:
                die('Not found!');
                break;
        }
    }
}
