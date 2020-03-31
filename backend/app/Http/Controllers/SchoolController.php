<?php

namespace App\Http\Controllers;


use App\Models\School;
use App\User;
use Illuminate\Http\Request;
use App\Http\Requests;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Mail\SchoolAdministrator;
use App\Models\CreateAccount;
use App\Models\RolePermission;


class SchoolController extends ApiController
{
    public function createAdminMail(Request $request){
        //recieved email
        if(empty($request->email)) {
            return $this->missingField("email is required!");
        }
        // generate random code
        $code = md5(uniqid().time());
        $email = $request->email;
        Mail::to($email)->send(new SchoolAdministrator($email,$code));

         //store in database
        $createAccount = new CreateAccount();
        $createAccount->code = $email;
        $createAccount->email = $code;
        $createAccount->save();
       
        return $this->success('Email has been successfully sent to '.$email.'.');
    }

    public function confirmEmail(Request $request) {
        if(empty($request->email)) {
            return $this->missingField("email is required!");
        } else if(empty($request->code)){
            return $this->missingField("email is required!");
        } 
        try {
            $account =  CreateAccount::where('code',$request->email)->where('email',$request->code)->get();
            // delete this account 
            $account->delete();
            return $this->success('Email Confirmation complete');
        } catch (\Exception $e) {
            return $this->fail("Invalid Account, Please Try Again.");
        }

    }

    public function createSchool(Request $request){
      
        if(empty($request->schoolName)) {
            return $this->missingField("name of school is required!");
        } else if(empty($request->email)){
            return $this->missingField("email address is required!");
        } else if(empty($request->address)){
            return $this->missingField("school address field is required!");
        } else if(empty($request->phone)){
            return $this->missingField("phone field is required!");
        } else if(empty($request->about)){
            return $this->missingField("about field of school is required!");
        } else if(empty($request->password)){
            return $this->missingField("password field is required!");
        }

        try {
            $school = new School;
            $school->name = $request->name;
            $school->address = $request->address;
            $school->about = $request->about;
            $school->phone = $request->phone;

            if($school->save()) {
                $user = new User();
                $user->school_id = $school->id;
                $user->email = $email;
                if(!empty($request->classId)){
                    // if the user is a student, he will have a class id
                    $user->classId = $request->classId;
                }
                $user->role_id = 1;
                $user->password = Hash::make($request->password);
                $user->save();
                return $this->success('School account has been successfully created.');
            }
        } catch (\Exception $e) {
            return $this->fail("Error: ".$e->getMessage());
        }

    }

    // assign subject to teacher
    public function assignSubject(Request $request){
        try {

        } catch (\Exception $e) {
            return $this->fail("Unable to assign Subject to, Please try again.");
        }
    }

    public function viewSubjectsForClass(Request $request){
        try {


        } catch (\Exception $e) {
            return $this->fail("Error viewing subjects. ".$e->getMessage());
        }
    }


    public function createRolePermission (Request $request) {
        try {
            if(empty($request->permissions)){
                return $this->notFound("permissions are required");
            }
            foreach($request->permissions as $data) {
                $pem = new RolePermission();
                $pem ->role_id = $data['rolePermission']['roleId'];
                $row ->permission_id = $data['rolePermission']['permissionId'];
                $row->save();   
            }
            return $this->success('Role Permissions successfully created.');
        } catch (\Exception $e) {
            return $this->fail("Error creating role permissions. ".$e->getMessage());
        }
   
   }

    public function destroy($id){

        // if ($request->hasFile('photo')) {

        //     if ($request->file('photo')->isValid()) {
        //         $file = $request->file('photo');
        //         $path = $request->photo->path();
        //         // $school->active=$request['logo'];
        //         //store photo
        //         $path = $request->photo->store('images');
        //     }
        // }

    }
}
