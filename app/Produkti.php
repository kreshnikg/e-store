<?php

namespace App;

use Database\BaseModel as Model;

class Produkti extends Model {
    protected $tableName = 'produkti';
    public $primaryKey = 'produkti_id';
//    public $timestamps = true;
}
