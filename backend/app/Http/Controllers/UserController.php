<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Models\RolePermission;
use App\Models\Role;
use App\Models\Permission;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;


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
                return $this->success('Account has been created for '.$request->firstname." ".$request->lastname);
            }
        } catch (\Exception $e) {
            return $this->fail("Unable to create user Account, Please try again.".$e->getMessage());
        }
    }

    public function viewAllTeachers(Request $request){
        try {
            $users = User::where('roleId', '=', 2)->paginate(15);

        } catch (\Exception $e) {
            return $this->fail("Error viewing all teachers. ".$e->getMessage());
        }
    }

    public function ViewAllStudents(Request $request){
        try {
            $users = User::where('roleId', '=', 3)->paginate(15);

        } catch (\Exception $e) {
            return $this->fail("Error viewing all students. ".$e->getMessage());
        }
    }

    public function ViewStudentsInClass(Request $request){
        try {


        } catch (\Exception $e) {
            return $this->fail("Error viewing all students in a class. ".$e->getMessage());
        }
    }

    public function createPermission(Request $request){ 
        try {
            if(empty($request->name)){
                return $this->missingField("The Permission Name is required!");
             }
             $permission = new Permission;
             $permission->name = $request->name;
             if($permission->save()){
                return $this->success($request->name.' Permission has been successfully created'); 
             }

        } catch (\Exception $e) {
            return $this->fail("Error fetching permissions for Role. ".$e->getMessage());
        }
    }

    public function UpdatePermission(Request $request){ 
        try {
            if(empty($request->id)){
                return $this->missingField("The Permission id is required!");
             } else if(empty($request->name)){
                return $this->missingField("The Permission  name is required for update.");
             }
             $permission = Permission::find($request->id);
             if(!$permission){
                return $this->fail("Permission does not exist");
             }
             
             if($permission->update($request)){
                return $this->success($request->name.' Permission has been successfully created'); 
             }

        } catch (\Exception $e) {
            return $this->fail("Error updating permission. ".$e->getMessage());
        }
    }

    public function FetchPermissionsForRole(Request $request){ 
        try {
            if(empty($request->roleId)){
                return $this->missingField("The Role Id is required!");
             }
             $permissions = RolePermission::where('role_id', '=',$request->roleId)->get();
             // pass it into a resource

        } catch (\Exception $e) {
            return $this->fail("Error fetching permissions for Role. ".$e->getMessage());
        }
    }

    public function login(Request $request){
        try {
            $credentials = $request->only('email', 'password'); 
            $token =  Hash::make($request->password);
            if(Auth::attempt($credentials)){ 
                // get user details and permission of the user based on the role
                return response()->json([
                    'user' => Auth()->user(),
                    'token' => $token,
                    'permissions' => Auth()->user()->UserRoles(),
                     'success' => true,
                ]);
            }

            return $this->fail("User Login failed");
        } catch (\Exception $e) {
            return $this->fail("Error Logging in. ".$e->getMessage());
        }
    
    }

    public function logOut(){
        Auth::logout();
        return $this->success('User logged Out');
    }
    
}
