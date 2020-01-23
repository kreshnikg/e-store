<?php

namespace App\Controller;

use App\Perdoruesi;

class PerdoruesiController extends BaseController
{
    public static function index()
    {
        return json_encode(Perdoruesi::all());
    }

    public static function store($request){
        $data = json_decode($request);
        $perdoruesi = new Perdoruesi;
        $perdoruesi->emri = $data->emri;
        $perdoruesi->mbiemri = $data->mbiemri;
        $perdoruesi->email = $data->email;
        $perdoruesi->save();
        return "success";
    }

    public static function show($id)
    {
        return json_encode(Perdoruesi::find($id));
    }

    public static function update($request,$id)
    {

    }
}
