<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RolePermission extends Model
{
    protected $fillable = [
        'role_id','permission_id'
    ];

    public function User(){
        return $this->belongsToMany('App\User');
    }
}
