<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ExamGrade extends Model
{
    public function User() {
        return $this->belongsTo('App\User');
    }
}
