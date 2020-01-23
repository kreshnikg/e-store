<?php

namespace App;

use Database\BaseModel as Model;

class User extends Model {
    protected $tableName = 'users';
    public $primaryKey = 'id';
//    public $timestamps = true;
}
