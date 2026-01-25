<?php

namespace App\Http\Middleware;

use App\Models\Cart;
use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class CartDataMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        Inertia::share('cartcount', function() use ($request){
            if($request->user()){
                return Cart::where("user", $request->user()->id)->count();
            }
            return 0;
        });

        // Inertia::share([
        //     'cartCount' => $request->user()
        //     ? $request->user()->carts()->count()
        //     : 0
        // ]);
        return $next($request);
    }
}
