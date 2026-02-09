<?php

use App\Http\Controllers\backend\BackendController;
use Illuminate\Support\Facades\Route;



// Route::prefix('admin')->controller(BackendController::class)->group(function() {
//     Route::get('dashboard', 'dashboard')->name('dashboard');


// });

Route::middleware(['user','is_admin'])->group(function(){


Route::controller(BackendController::class)->group(function() {
     Route::get('dashboard', 'dashboard')->name('dashboard');
     Route::get('addproduct', 'addproduct')->name('addproduct');
    Route::post('saveproduct', 'saveproduct')->name('saveproduct');
    Route::get('addcategory', 'addcategoryform')->name('addcategory');
    Route::post('savecategory', 'savecategory')->name('savecategory');
    Route::get('editcategory/{id}', 'editcategory')->name('editcategory');
    Route::put('saveeditedcategegory/{id}', 'saveeditedcategegory')->name('saveeditedcategegory');
    Route::get('deletecategory/{id}', 'deletecategory')->name('deletecategory');
    Route::get('editproduct/{id}', 'editproduct')->name('editproduct');
    Route::put("/saveeditedproduct/{id}",'saveeditedproduct')->name("saveeditedproduct");

    Route::get("/users",[BackendController::class, "users"])->name("users");
    Route::post("/updateuserposstion/{id}",[BackendController::class, "updateuserposstion"])->name("updateuserposstion");

    Route::get('/deleteproduct/{id}','deleteproduct')->name('deleteproduct');


});
});

