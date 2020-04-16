<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;


class UserController extends ApiController
{

    public function createUser(Request $request){
        if(empty($request->email)){
            return $this->missingField('Email address is missing.');
        } else if(empty($request->firstname)){
            return $this->missingField('Firstname is missing.');
        }else if(empty($request->lastname)){
            return $this->missingField('Lastname is missing.');
        }else if(empty($request->roleId)){
            return $this->missingField('Role is missing.');
        }else if(empty($request->schoolId)){
            return $this->missingField('school ID is missing.');
        }else if(empty($request->password)){
            return $this->missingField('Password is missing.');
        }
        try {
            $user = new User;
            $user->firstname = $request->firstname;
            $user->lastname = $request->lastname;
            $user->role_id = $request->roleId;
            $user->school_id = $request->schoolId;
            $user->email = $request->email;
            $user->password = Hash::make($request->password);
            
            if($user->save()){
                return $this->success('Account has been created for '.$firstname." ".$lastname);
            }
        } catch (\Exception $e) {
            return $this->fail("Unable to create user Account, Please try again.");
        }
    }

    public function viewAllTeachers(Request $request){
        try {
            $users = User::where('roleId', '=', 2)->paginate(15);

        } catch (\Exception $e) {
            return $this->fail("Error viewing all teachers. ".$e);
        }
    }

    public function ViewAllStudents(Request $request){
        try {
            $users = User::where('roleId', '=', 3)->paginate(15);

        } catch (\Exception $e) {
            return $this->fail("Error viewing all students. ".$e);
        }
    }

    public function ViewStudentsInClass(Request $request){
        try {


        } catch (\Exception $e) {
            return $this->fail("Error viewing all students in a class. ".$e);
        }
    }
    
}
