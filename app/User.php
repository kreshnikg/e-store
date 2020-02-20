<?php

namespace App;

use Database\Model;

class User extends Model {
    protected $table = 'users';
    protected $primaryKey = 'id';
//    public $timestamps = true;
}
