<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    public function User() {
        return $this->belongsTo('App\User');
    }
}
