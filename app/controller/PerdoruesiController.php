<?php

namespace App\Controller;

use App\Perdoruesi;

class PerdoruesiController extends BaseController
{
    public function index()
    {
        return json_encode(Perdoruesi::all());
    }

    public function store($request){
        $perdoruesi = new Perdoruesi;
        $perdoruesi->emri = $request->emri;
        $perdoruesi->mbiemri = $request->mbiemri;
        $perdoruesi->email = $request->email;
        $perdoruesi->save();
        return "success";
    }

    public function show($id)
    {
        return json_encode(Perdoruesi::find($id));
    }

    public function update($request,$id)
    {

    }
}
