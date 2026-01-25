<?php

namespace App\Providers\counter;

use App\Models\Cart;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class CounterServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
        Inertia::share([
            "daliy_sales"=> Schema::hasTable("products")?Product::count():0,
        ]);

        Inertia::share([
            "category"=>Schema::hasTable("categories")?Category::all():null,
        ]);


    }
}
