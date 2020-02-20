<?php

namespace App;

use Database\Model as Model;

class Klienti extends Model {
    protected $table = 'klienti';
    protected $primaryKey = 'klienti_id';
//    public $timestamps = true;
}
