<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AssignedSubject extends Model
{
    public function User() {
        return $this->belongsTo('App\User');
    }
}
