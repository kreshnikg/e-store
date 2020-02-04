<?php


namespace App\Controller;


class BaseController
{
    protected function middleware($type)
    {
        switch($type){
            case "auth":
                if (isset($_SESSION["logged_in"]) ) {
                    if($_SESSION["logged_in"] != true)
                        die("Unauthorized");
                } else
                    die("Unauthorized");
                break;
        }
    }

    public function validate($request,$rules)
    {
        $exist = [];
        foreach($request as $key => $value){
            foreach($rules as $rule){
                if($rule === $key){
                    array_push($exist, $rule);
                }
            }
        }

        $notSet = array_diff($rules, $exist);
        if (count($notSet) == 0) {
            return;
        } else {
            $validationMessage = new \stdClass();
            foreach($notSet as $ns){
                $validationMessage->$ns = "Kjo fushë duhet të plotësohet patjeter";
            }
            echo json_encode($validationMessage);
            die(http_response_code(422));
        }
    }
}
