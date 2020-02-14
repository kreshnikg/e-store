<?php

namespace App;

use Database\BaseModel as Model;

class User extends Model {
    protected $table = 'users';
    protected $primaryKey = 'id';
//    public $timestamps = true;
}
