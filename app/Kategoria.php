<?php

namespace App;

use Database\BaseModel as Model;

class Kategoria extends Model {
    protected $tableName = 'kategoria';
    public $primaryKey = 'kategoria_id';
//    public $timestamps = true;
}
