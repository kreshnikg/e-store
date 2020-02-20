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
                        response("Unauthorized", 401);
                } else
                    response("Unauthorized", 401);
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
            response($validationMessage,422);
        }
    }
}
