<?php


namespace App\Controller;


class BaseController
{
    // TODO middleware
    public function middleware()
    {

    }

    public static function validate($request,$rules)
    {
        $data = json_decode($request);
        $exist = [];
        foreach($data as $key => $value){
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
