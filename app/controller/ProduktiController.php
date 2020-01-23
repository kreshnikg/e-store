<?php

namespace App\Controller;

use App\Produkti;

class ProduktiController
{
    public static function index()
    {
        return json_encode(Produkti::all());
    }

    public static function store($request){
        $data = json_decode($request);
        $produkti = new Produkti;
        $produkti->emertimi = $data->name;
        $produkti->cmimi = $data->price;
        $produkti->save();
        return "success";
    }

    public static function show($id)
    {
        return json_encode(Produkti::find($id));
    }

    public static function update($request,$id)
    {

    }
}
