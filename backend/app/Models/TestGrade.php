<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TestGrade extends Model
{
    public function User() {
        return $this->belongsTo('App\User');
    }
}
