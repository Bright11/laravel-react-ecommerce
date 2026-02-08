<?php

use App\Http\Controllers\auth\AuthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\backend\BackendController;
use App\Http\Controllers\frontend\FrontendController;

// Route::get('/', function () {
//     return Inertia::render('frontend/home');
// })->name('home');

// Route::get("admin/addproduct",[BackendController::class,'addproductform'])->name("addproduct");
// Route::get("admin/addcategory",[BackendController::class,'addcategoryform'])->name("addcategory");
// Route::post("admin/savecategory",[BackendController::class,'savecategory'])->name("savecategory");



// Route::prefix('admin')->controller(BackendController::class)->group(function() {



// });
Route::get("/register",[AuthController::class,"register"])->name("register");
Route::post("/registeruser",[AuthController::class,"registeruser"])->name("registeruser");
Route::get("/login",[AuthController::class,"login"])->name("login");
Route::post("/loginuser",[AuthController::class,"loginuser"])->name("loginuser");
Route::get("/logout",[AuthController::class,"logout"])->name("logout");

Route::middleware(['cartcount'])->group(function(){
Route::get("/",[FrontendController::class,"home"])->name("home");

Route::get("/details/{id}",[FrontendController::class,"details"])->name("details");





// cartcount
Route::middleware(['user',"is_active"])->group(function(){
    Route::get("/cartpage",[FrontendController::class, "cartpage"])->name('cartpage');
    Route::get("/addtocart/{id}",[FrontendController::class, "addtocart"])->name("addtocart");
    Route::post("/updatecart/{id}",[FrontendController::class, "updatecart"])->name("updatecart");
});
;
});



