<?php

namespace App;

use Database\BaseModel as Model;

class Klienti extends Model {
    protected $table = 'klienti';
    protected $primaryKey = 'klienti_id';
//    public $timestamps = true;
}
