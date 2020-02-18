<?php
session_start();
require __DIR__.'/vendor/autoload.php';

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest' ) {
    include "routes/api.php";
}
else {
    $requestUri = $_SERVER['REQUEST_URI'];
    if(fnmatch('/dashboard*',$requestUri))
        require __DIR__ . '/views/dashboard.php';
    else {
        require __DIR__ . '/views/index.php';
    }
}
