<?php

namespace App\Controller;

use App\User;


$myUser = new User;
$myUser->first_name = 'Filan';
$myUser->last_name = 'Fisteku';
$myUser->email = 'Fisteku@gmail.com';
$myUser->save();

return http_response_code(200);

//echo 'INSTANCE 1 ' . json_encode(User::where('last_name','=','Gashi')->orderBy('first_name','DESC')->get());
//echo '<br/>';
//echo 'INSTANCE 2 ' . json_encode(User::where('first_name','=','Kreshnik')->get());
//echo '<br/>';
//echo 'INSTANCE 3 ' . json_encode(User::find(4));
//echo '<br/>';
//$usr = User::all();
//foreach ($usr as $u) {
//    echo json_encode($u);
//    echo '<br/>';
//}
//$myUser = new User;
//$myUser->first_name = 'Filan';
//$myUser->last_name = 'Fisteku';
//$myUser->email = 'Fisteku@gmail.com';
//$myUser->save();
