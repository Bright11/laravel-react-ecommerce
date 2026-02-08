<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Product;
use App\Models\Wishlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FrontendController extends Controller
{
    //

    public function home()
    {
        $products=Product::latest()->paginate(10)->through(function($product){
            return [
                "name"=>$product->productname,
                'category'  => $product->category?->name,
                'price'     => $product->price,
                'stock'     => $product->stock,
                 'image_url' => $product->image
                ? asset('storage/' . $product->image)
                : null,
                 "id"=>$product->id,
            ];
        });
        return Inertia::render("frontend/home/home",compact("products"));
    }

    public function details($id)
    {
       $datadetails=Product::findOrfail($id);
       $relatedProducts = Product::where('category_id', $datadetails->category_id)
    ->with('category')
    ->take(5)
    ->get()
    ->map(function ($item) {
        return [
            'id' => $item->id,
            'name' => $item->productname,
            'price' => $item->price,
            'category' => $item->category->name ?? null,
            'image' => $item->image
                ? asset('storage/' . $item->image)
                : null,
        ];
    });

        $data=[
            'image'=>$datadetails->image
                ? asset('storage/' . $datadetails->image)
                : null,
            'price'=>$datadetails->price,
            "name"=>$datadetails->productname,
            "id"=>$datadetails->id,
            "description"=>$datadetails->description?:""

        ];

        return Inertia::render("frontend/details/details",["datadetails"=>$data,"relatedpro"=>$relatedProducts]);
    }

    public function cartpage()
    {
        $userscart=Cart::where("user",Auth::user()->id)->with("products")->get()->map(function($data){
            return [
                'id'=>$data->id,
                'name'=>$data->products->productname??null,

                 'price'=>$data->products->price??null,
                 'image'=>$data->products->image
                ? asset('storage/' . $data->products->image)
                : null,
                'total'=>$data->products->price * $data->qty??null,
                'qty'=>$data->qty??null,
                "productId"=>$data->productId??null,
            ];
        });
        return Inertia::render("frontend/cartpage/cartpage",compact('userscart'));
    }

    public function addtocart(Request $req,$id)
    {


        $product=Product::findOrfail($req->id);
        // return $product;
        $checkwishlist=Wishlist::where("productId",$id)->first();
        $checkcart=Cart::where("user",Auth::user()->id)->where("productId",$id)->first();
        if($checkcart){
            $checkcart->qty = $checkcart->qty + 1;
            $checkcart->totalprice= $checkcart->totalprice+$product->price;
            $checkcart->save();
            return redirect()->back()->with("message","Item already exist");
        }
        $newcart=new Cart();
        $newcart->user=Auth::user()->id;
        $newcart->productId=$product->id;
        $newcart->qty=1;
        $newcart->totalprice=$product->price;
        $newcart->save();
        if ($checkwishlist){
            $checkwishlist->delete();
        }
        if($newcart){
            return redirect()->back();
        }

    }

    public function updatecart(Request $req,$id)
    {
        $req->validate([
            'qty'=>'required | min:1',
            'mode'=>'required'
        ]);
         $checkcart=Cart::where("id",$id)->where("user",Auth::user()->id)->first();
         if(!$checkcart){
            return back();
         }
        if($req->qty <1){
            $checkcart->delete();
           return back();
        }

         $getproduct=Product::where("id",$checkcart->productId)->first();

       if($req->mode=="increased"){
        $checkcart->qty=$req->qty;
        $checkcart->save();
         return back();
       }
    //    if($req->mode=="decreaseitem"){
    //     $checkcart->qty=$checkcart->qty - $req->qty;
    //     $checkcart->save();
    //    }
    }
}

