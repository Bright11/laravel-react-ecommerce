<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class AuthController extends Controller
{
    //

    public function register()
    {
        return Inertia::render("auth/register/register");
    }

    public function registeruser(Request $req)
    {
        $req->validate([
            "password"=>"required_with:confirmpassword|same:confirmpassword",
            "email"=>"required|unique:users"
        ]);

        User::create([
            "name"=>$req->username,
            "email"=>strtolower($req->email),
            "password"=>Hash::make($req->password),
        ]);
         return redirect()->route("login");
    }

    public function login()
    {
        return Inertia::render('auth/login/login');
    }

    public function loginuser(Request $req)
    {
        $req->validate([
            'email'=>"required|email",
            "password"=>"required"
        ]);
        // Attempt login with just email/password
        if (!Auth::attempt(['email' => strtolower($req->email), 'password' => $req->password])) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials do not match our records.'],
            ]);
        }

        // Now check if user is active (after auth succeeds)
        $user = Auth::user();
        if (!$user->is_active) {  // Assuming 'is_active' is a boolean column on users table
            Auth::logout();  // Log them out immediately
            throw ValidationException::withMessages([
                'email' => ['Your account is inactive. Please contact support.'],
            ]);
        }

        // Regenerate session to prevent fixation attacks (good practice, keep this)
        $req->session()->regenerate();

        // NO manual session()->put('user', ...) – Laravel handles it!

        return redirect()->route('home')->with('reload', true);

    }

    public function logout(Request $req){
                Auth::logout();
                $req->session()->invalidate();
                return redirect()->route("login")->with('reload', true);

    }
}
