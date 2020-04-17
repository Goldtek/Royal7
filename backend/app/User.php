<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'firstname', 'email', 'password', 'lastname', 'school_id', 'role_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    public function Role(){
        return $this->hasOne('App\Models\Role');
    }


    public function AssignedSubjects() {
        return $this->hasMany('App\Models\AssignedSubject');
    }

    //realtionship for pulling a students examgrades for each term
    public function ExamGrade() {
        return $this->hasMany('Ap\Models\ExamGrade');
    }

    public function TestGrade() {
        return $this->hasMany('App\Models\TestGrade');
    }

    public function Subjects() {
        return $this->hasMany('App\Models\Subject');
    }

    public function UserRoles(){
        return $this->hasMany('App\Models\RolePermission');
    }


}
