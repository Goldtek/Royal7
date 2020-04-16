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

Route::middleware('auth:api')->group( function () {
  
});



// route to generate confirmation mail for school admin
Route::post('send/mail', 'SchoolController@createAdminMail');


// route to confirm school admin email
Route::post('admin/confirm', 'SchoolController@confirmEmail');

//route to create school and admin
Route::post('school/admin', 'SchoolController@createSchool');

//route to create use[teacher/student/staff]
Route::post('user/create', 'UserController@createUser');

//route to login
Route::post('user/login', 'UserController@login');

//route to logout
Route::post('user/logout', 'UserController@logOut');

//route to assign teacher to course
Route::post('assign/subject', 'SchoolController@assignSubject');

//route to view all subjects
Route::post('subjects', 'SchoolController@viewSubjectsForClass');

//route to view all students
Route::post('view/students', 'UserController@ViewAllStudents');

//route to view all students in a specific class
Route::post('view/students/class', 'UserController@ViewStudentsInClass');

//route to view all teachers
Route::post('view/teachers', 'UserController@viewAllTeachers');

// route create permission
Route::post('permission/create', 'UserController@createPermission');

// route to Update Permission setting
Route::post('permission/create', 'UserController@UpdatePermission');