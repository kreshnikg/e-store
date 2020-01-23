<?php

namespace App;

use Database\BaseModel as Model;

class Klienti extends Model {
    protected $tableName = 'klienti';
    public $primaryKey = 'klienti_id';
//    public $timestamps = true;
}
