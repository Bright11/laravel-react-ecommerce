<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\backend\BackendController;


Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

// Route::get("admin/addproduct",[BackendController::class,'addproductform'])->name("addproduct");
// Route::get("admin/addcategory",[BackendController::class,'addcategoryform'])->name("addcategory");
// Route::post("admin/savecategory",[BackendController::class,'savecategory'])->name("savecategory");



Route::prefix('admin')->controller(BackendController::class)->group(function() {
    Route::get('addproduct', 'addproductform')->name('addproduct');
    Route::post('saveproduct', 'saveproduct')->name('saveproduct');
    Route::get('addcategory', 'addcategoryform')->name('addcategory');
    Route::post('savecategory', 'savecategory')->name('savecategory');
    Route::get('editcategory/{id}', 'editcategory')->name('editcategory');
    Route::put('saveeditedcategegory/{id}', 'saveeditedcategegory')->name('saveeditedcategegory');
    Route::get('deletecategory/{id}', 'deletecategory')->name('deletecategory');
    Route::get('editproduct/{id}', 'editproduct')->name('editproduct');
    Route::put("/saveeditedproduct/{id}",'saveeditedproduct')->name("saveeditedproduct");



});
