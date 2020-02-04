<?php
session_start();
require __DIR__.'/vendor/autoload.php';
include "routes/api.php";

$requestUri = $_SERVER['REQUEST_URI'];

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest' ) {
    $requestMethod = $_SERVER["REQUEST_METHOD"];
    if($requestMethod == 'POST'){
        $data = file_get_contents('php://input');
        switchRoute($requestUri,'POST',$data);
    } else if($requestMethod == 'GET') {
        switchRoute($requestUri,'GET');
    } else {
        die("Unsupported method");
    }
} else {
    require __DIR__ . '/views/index.php';
}
