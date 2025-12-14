<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;

class BackendController extends Controller
{
    //
    public function addproductform(){
        $categorydata=Category::all();
        $products=Product::all()->map(function($product){
            return[
                'id'=>$product->id,
                'name'=>$product->productname,
                'category'=>$product->category->name,
                'image_url' => asset('storage/' . $product->image),
            ];
        });
        return Inertia::render('backend/product/addproduct',compact("categorydata","products"));
    }
    public function addcategoryform(){
        $categorydata=Category::all();
        return Inertia::render('backend/category/addcategory',compact("categorydata"));
    }



    public function savecategory(Request $req){
        $req->validate([
            "category"=>"required|unique:categories,name"
        ]);
        // dd($req->category);
        // dd(Str::slug($req->category));
        $categorydata=Category::create([
            "name"=>$req->category,
            "slug"=>Str::slug($req->category)
        ]);
        return back()->with('success', 'Category saved successfully.');

    }

    public function editcategory($id)
    {
        $categorydata=Category::find($id);
        return Inertia::render("backend/category/editcategory",compact("categorydata"));
    }

    public function saveeditedcategegory(Request $req,$id)
    {
        $validated = $req->validate([
        'category' => 'required|string|max:255',
    ]);
    // dd($req->category);

    $category = Category::findOrFail($id);
    // dd($validated);

    // $category->update([
    //     'category' => $validated['category'],
    // ]);
        // $categorydata=Category::find($id);
        $category->name=$req->category;
        $category->slug=Str::slug($req->category);
        $category->update();
        return redirect()->route("addcategory");
    }

    public function deletecategory($id)
    {
        Category::find($id)->delete();
        return back()->with('success', 'Category deleted successfully.');

    }

    public function saveproduct(Request $req)
    {
        if($req->purcheseprice <= $req->price){
            return back()->with('error',"selling price can not be higher than purches price");
        }

        $products=new Product();
        $products->productname=$req->productname;
        $products->price=$req->price;

        $products->purcheseprice=$req->purcheseprice;
        $products->description=$req->description??"";
        $products->stock=$req->stock;
        $products->keywords=$req->keywords??"";
        if($req->hasFile('file')){
            $imagePath = $req->file('file')->store('products', 'public');
            $products->image = $imagePath;
        }
        $products->category_id = $req->category;
        $products->save();

        return redirect()->route("addproduct");

    }

public function editproduct($id)
{
    $product=Product::find($id);

    $editcategory=[
        'categoryname'=>$product->category->name,
        'categoryid'=>$product->category->id

    ];
    $category=Category::all();
    return Inertia::render('backend/product/editproduct',compact('product',"editcategory",'category'));
}

public function saveeditedproduct(Request $req,$id)
{
    // dd( $req->stock);
    $products=Product::find($id);
    $products->productname=$req->productname;
        $products->price=$req->price;

        $products->purcheseprice=$req->purcheseprice;
        $products->description=$req->description??"";
        $products->stock=$req->stock;
        $products->keywords=$req->keywords??"";
        if($req->hasFile('file')){
            $imagePath = $req->file('file')->store('products', 'public');
            $products->image = $imagePath;
        }
        $products->category_id = $req->category;
        $products->save();
        return redirect()->route("addproduct");
}

}
