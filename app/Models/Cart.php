<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    //
    public function products()
    {
        return $this->belongsTo(Product::class,'productId','id');
    }

}
