<?php

namespace App\Controller;

use App\Produkti;

class ProduktiController extends BaseController
{
    public function index()
    {
//        return json_encode(Produkti::select('*')->get());
        return json_encode(Produkti::with(['brendi'])->select('*')->get());
    }

    public function store($request){
        $this->middleware("auth");
        $produkti = new Produkti;
        $produkti->emertimi = $request->name;
        $produkti->cmimi = $request->price;
        $produkti->save();
        return "success";
    }

    public function show($id)
    {
        return json_encode(Produkti::find($id));
    }

    public function update($request,$id)
    {

    }
}
