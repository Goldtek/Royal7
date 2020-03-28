<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Api for royal 7
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


// route to generate confirmation mail for school admin
Route::post('send/mail', 'SchoolController@createAdminMail');


// route to confirm school admin email
Route::post('admin/confirm', 'SchoolController@confirmEmail');

//route to create school and admin
Route::post('school/admin', 'SchoolController@createSchool');

//route to create use[teacher/student/staff]
Route::post('user/create', 'UserController@createUser');

// route to delete school by super admin

// route to update user

// route to create role

// route to update role

// route to delete role

// route to create permission

// route to update permissions table

// update a users permission

// route to login

//route to logout

//route to admin dashboard

// route for teachers to view courses assigned to them

// route for teacher to navigate to a class and upload assignment to students for that term

// route for teacher to view inbox

// route for student to view asssignment from each teacher for that term

// route for student to view grade 

// route for teacher to view classes he  is assigned to teach for the term

// route for teacher to view subject or subjects he is assigned to teach in each class

// route to see all subjects assigned to him and the class

// route for teacher to score test and exam record for each student for the term


