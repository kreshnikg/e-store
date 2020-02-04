<?php

namespace App\Controller;

use App\Produkti;

class ProduktiController extends BaseController
{
    public function index()
    {
        $page = 0;
        if(isset($_GET["page"]))
            $page = $_GET["page"];

        return json_encode(Produkti::select('*')->paginate(3,$page)->get());
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
