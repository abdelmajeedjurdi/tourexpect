<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use App\Models\ProductFile;
use App\Models\ProductImage;
use App\Models\ProductProperty;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ProductResource::collection(Product::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Log::info($request);
        if ($request->hasFile('image')) {
            $image = $request->image;
            $imageName = $image->getClientOriginalName();
            $imageName = time() . '_' . $imageName;
            $image->move(public_path('/images/products'), $imageName);
        } else {
            $imageName = 'default.jpg';
        }

        $product = new Product();
        $product->category_id = $request->category_id;
        $product->name_en = $request->name_en;
        $product->name_ar = $request->name_ar;
        $product->description_en = $request->description_en;
        $product->description_ar = $request->description_ar;
        $product->thumbnail = $imageName;
        $product->slug = Str::slug($product->name_en, '-');
        $product->save();

        foreach (json_decode($request['properties'], true) as $item) {
            Log::info($item);
            ProductProperty::create([
                'product_id' => $product->id,
                'title_en' => $item['title_en'],
                'title_ar' => $item['title_ar'],
                'description_en' => $item['description_en'],
                'description_ar' => $item['description_ar']
            ]);
        }

        if ($request->hasFile('images')) {

            foreach ($request->file('images') as $file) {

                $imageName = time() . '_' . $file->getClientOriginalName();
                $file->move(public_path('/images/products'), $imageName);

                ProductImage::create([
                    'product_id' => $product->id,
                    'image' => $imageName,
                    // 'created_at' => Carbon::now()
                ]);
            }
        }

        if ($request->hasFile('files')) {

            foreach ($request->file('files') as $file) {

                $OriginalName = $file->getClientOriginalName();
                $imageName = time() . '_' . $file->getClientOriginalName();
                $file->move(public_path('/files/products'), $imageName);

                ProductFile::create([
                    'product_id' => $product->id,
                    'file' => $imageName,
                    'original_name' => $OriginalName,
                    // 'created_at' => Carbon::now()
                ]);
            }
        }

        return ['message' => 'Product Created Successfully'];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return new ProductResource($product);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
