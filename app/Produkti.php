<?php

namespace App;

use Database\BaseModel as Model;

class Produkti extends Model {
    protected $table = 'produkti';
    protected $primaryKey = 'produkti_id';
//    public $timestamps = true;

    public function brendi(){
        $this->hasOne('App\Brendi','brendi_id','brendi_id');
    }

    public function kategoria(){
        $this->hasOne('App\Kategoria','kategoria_id','kategoria_id');
    }
}
