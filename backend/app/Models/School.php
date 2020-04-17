<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class School extends Model
{

    protected $fillable = [
        'name', 'address', 'about', 'logo', 'phone', 'newsLetter'
    ];

    public function User() {
        return $this->belongsTo('App\User');
    }
}
