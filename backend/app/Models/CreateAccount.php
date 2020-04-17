<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CreateAccount extends Model
{
    protected $fillable = [
        'email', 'code'
    ];
}
