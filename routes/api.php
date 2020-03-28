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
