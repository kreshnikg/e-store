<?php

namespace App;

use Database\BaseModel as Model;

class Perdoruesi extends Model {
    protected $table = 'perdoruesi';
    protected $primaryKey = 'perdoruesi_id';
    public $timestamps = true;
}
